// import { Card } from 'components';
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
      <div className={classes.CategoriesContent} key={cat.id}>
        <div
          className={[classes.CategoryHeader, color].join(' ')}
          style={{ backgroundColor: color }}
        >
          <i className={['fa', 'fa-layer-group', classes.Fa].join(' ')} />
        </div>
        <div className={classes.CategoryBody}>
          <div className={classes.InnerBody}>
            <span className={classes.InnerLabel}>Category:</span>
            <span className={classes.InnerValue}>{cat.category}</span>
          </div>
          <div className={classes.InnerBody}>
            <span className={classes.InnerLabel}>Number of Expenses:</span>
            <span className={classes.InnerValue}>100</span>
          </div>
          <div className={classes.InnerBody}>
            <span className={classes.InnerLabel}>Amount:</span>
            <span className={classes.InnerValue}>£ 200</span>
          </div>
        </div>
      </div>
    );
  });
  return <div className={classes.CategoriesContainer}>{categories}</div>;
};

export default showCategories;
