import * as React from 'react';
import * as classes from './Tags.scss';

interface IProps {
  tags: ITag[];
  onSelectedTag: (id: number) => void;
}

interface ITag {
  id: number;
  color: string;
  selected: boolean;
}

const tags = (props: IProps) => {
  const tag: any[] = [];
  props.tags.map(t =>
    tag.push(
      <div
        key={t.id}
        className={[classes.Tag, t.selected ? classes.Selected : null].join(
          ' '
        )}
        style={{ backgroundColor: t.color }}
        onClick={() => props.onSelectedTag(t.id)}
      />
    )
  );
  return <div className={classes.TagContainer}>{tag}</div>;
};

export default tags;
