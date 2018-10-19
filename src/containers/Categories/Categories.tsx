import { IError } from 'common/interfaces';
import { Button, Type } from 'components';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createCategoryStart, loadCategoriesStart } from 'store/actions';
import AddCategory from './AddCategory/AddCategory';
import ShowCategories from './ShowCategories/ShowCategories';
interface IProps {
  userId: string;
  error: IError;
  createCategory: (id: string, category: string, tagId: number) => void;
  loadCategories: (id: string) => void;
  categories: any[];
  loading: boolean;
}

interface IState {
  isModalOpen: boolean;
  selectedTag: number;
  tags: ITag[];
  category: string;
}

interface ITag {
  id: number;
  color: string;
  selected: boolean;
}

class Categories extends Component<IProps, IState> {
  public state = {
    isModalOpen: false,
    selectedTag: 1,
    category: '',
    userId: '',
    tags: [
      {
        id: 1,
        color: '#999',
        selected: true,
      },
      {
        id: 2,
        color: 'darkOrange',
        selected: false,
      },
      {
        id: 3,
        color: '#ffeb3b',
        selected: false,
      },
      {
        id: 4,
        color: '#9c27b0',
        selected: false,
      },
      {
        id: 5,
        color: '#03a9f4',
        selected: false,
      },
      {
        id: 6,
        color: '#e91e63',
        selected: false,
      },
      {
        id: 7,
        color: '#009688',
        selected: false,
      },
      {
        id: 8,
        color: '#795548',
        selected: false,
      },
    ],
  };

  public componentDidMount() {
    this.props.loadCategories(this.props.userId);
  }

  public dismissModalHandler = () => {
    this.setState({ isModalOpen: false });
  };

  public openModalHandler = () => {
    this.setState({ isModalOpen: true });
  };

  public selectedTagHandler = (id: number) => {
    const newTag = this.state.tags.map(t => {
      if (t.id === id) {
        return {
          ...t,
          selected: true,
        };
      } else {
        return { ...t, selected: false };
      }
    });

    this.setState({ tags: newTag, selectedTag: id });
  };

  public categoryHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ category: evt.target.value });
  };

  public createCategoryHandler = (evt: React.FormEvent) => {
    this.props.createCategory(
      this.props.userId,
      this.state.category,
      this.state.selectedTag
    );
    this.setState({ isModalOpen: false });
  };

  public render() {
    return (
      <React.Fragment>
        <ShowCategories
          categories={this.props.categories}
          tags={this.state.tags}
        />

        <AddCategory
          tags={this.state.tags}
          category={this.state.category}
          error={this.props.error}
          isModalOpen={this.state.isModalOpen}
          onCategoryClick={this.categoryHandler}
          onCreateCategory={this.createCategoryHandler}
          onDismissModal={this.dismissModalHandler}
          onSelectedTag={this.selectedTagHandler}
        />
        <Button
          label="+"
          type={Type.PRIMARY}
          floating={true}
          clicked={this.openModalHandler}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userId: state.auth.localId,
  error: state.categories.error,
  categories: state.categories.categories,
  loading: state.categories.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createCategory: (id: string, category: string, tagId: number) =>
    dispatch(createCategoryStart(id, category, tagId)),
  loadCategories: (id: string) => dispatch(loadCategoriesStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
