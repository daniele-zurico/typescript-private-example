import { Card } from 'components';
import * as React from 'react';
import * as classes from './ShowCategories.scss';

interface IProps {
  categories: any[];
  tags: any[];
}

const showCategories = (props: IProps) => {
  const categories = props.categories.map((cat: any) => {
    const { color }: any = props.tags.find((t: any) => t.id === cat.tag);
    return (
      <Card
        key={cat.id}
        mini={true}
        customColor={color}
        body={
          <React.Fragment>
            <i className={['fa', 'fa-layer-group', classes.Fa].join(' ')} />
            <div>{cat.category}</div>
          </React.Fragment>
        }
      />
    );
  });
  return <div className={classes.CategoriesContainer}>{categories}</div>;
};

export default showCategories;
