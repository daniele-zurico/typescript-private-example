import { IError } from 'common/interfaces';
import { Button, Input, Modal, Tags, Type } from 'components';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createCategoryStart } from 'store/actions';
import * as classes from './Categories.scss';
interface IProps {
  userId: string;
  createCategory: (id: string, category: string, tagId: number) => void;
  error: IError;
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

  public createCategory = (evt: React.FormEvent) => {
    evt.preventDefault();
    this.props.createCategory(
      this.props.userId,
      this.state.category,
      this.state.selectedTag
    );
    console.log(this.props.userId);
  };

  public render() {
    return (
      <React.Fragment>
        <Modal
          class={classes.Modal}
          header="Add a new Category"
          isOpen={this.state.isModalOpen}
          onDismiss={this.dismissModalHandler}
        >
          <form className={classes.Form} onSubmit={this.createCategory}>
            <Input
              hint="Choose the name of your category"
              placeholder="Category name"
              value={this.state.category}
              onInputChange={this.categoryHandler}
              darkMode={true}
            />
            <Tags
              tags={this.state.tags}
              onSelectedTag={this.selectedTagHandler}
            />
            <div className={classes.ButtonContainer}>
              <Button
                type={Type.WARN}
                label="Cancel"
                clicked={this.dismissModalHandler}
              />
              <Button
                type={Type.PRIMARY}
                label="Confirm"
                isSubmit={true}
                darkMode={true}
                disabled={this.state.category === ''}
              />
            </div>
            {this.props.error.message && (
              <div className={classes.Error}>
                ({this.props.error.code}) {this.props.error.message}
              </div>
            )}
          </form>
        </Modal>
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
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createCategory: (id: string, category: string, tagId: number) =>
    dispatch(createCategoryStart(id, category, tagId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
