import React, { Fragment } from 'react';
import { INotionPost } from 'ts/interface/notion';
import PostItem from './postItem/PostItem';
import styles from './PostList.module.scss';

interface PostListProps {
  notionList: INotionPost[];
}

const PostList = ({ notionList }: PostListProps) => {
  return (
    <section className={styles.container}>
      {notionList.map(({ id, properties }) => (
        <Fragment key={id}>
          <PostItem
            title={properties.이름.title[0].plain_text}
            id={id}
            imageUrl={properties.image.files.length > 0 ? properties.image.files[0].file.url : null}
            createdAt={properties.created_date.date.start}
            description={properties.description.rich_text[0].plain_text}
            category={properties.category.multi_select[0].name}
          />
        </Fragment>
      ))}
    </section>
  );
};

export default PostList;
