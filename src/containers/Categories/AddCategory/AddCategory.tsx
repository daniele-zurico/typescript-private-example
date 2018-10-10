import { IError } from 'common/interfaces';
import { Button, Input, Modal, Tags, Type } from 'components';
import * as React from 'react';
import * as classes from './AddCategory.scss';

interface IProps {
  isModalOpen: boolean;
  category: string;
  tags: any[];
  error: IError;
  onDismissModal: () => void;
  onCreateCategory: (evt: React.FormEvent) => void;
  onCategoryClick: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectedTag: (id: number) => void;
}

const addCategory = (props: IProps) => {
  const onCreateCategorySuccess = (evt: React.FormEvent) => {
    evt.stopPropagation();
    props.onCreateCategory(evt);
  };

  return (
    <Modal
      class={classes.Modal}
      header="Add a new Category"
      isOpen={props.isModalOpen}
      onDismiss={props.onDismissModal}
    >
      <form className={classes.Form} onSubmit={onCreateCategorySuccess}>
        <Input
          hint="Choose the name of your category"
          placeholder="Category name"
          value={props.category}
          onInputChange={props.onCategoryClick}
          darkMode={true}
        />
        <Tags tags={props.tags} onSelectedTag={props.onSelectedTag} />
        <div className={classes.ButtonContainer}>
          <Button
            type={Type.WARN}
            label="Cancel"
            clicked={props.onDismissModal}
          />
          <Button
            type={Type.PRIMARY}
            label="Confirm"
            isSubmit={true}
            darkMode={true}
            disabled={props.category === ''}
          />
        </div>
        {props.error && (
          <div className={classes.Error}>
            ({props.error.code}) {props.error.message}
          </div>
        )}
      </form>
    </Modal>
  );
};

export default addCategory;
