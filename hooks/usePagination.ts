/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { Device } from 'ts/enum';
import { SanityPost } from 'ts/interface/post';
import { getDeviceType } from 'util/common';
import PaginationContoller from 'util/pagination';

interface UsePaginationProps {
  postList: SanityPost[];
}

interface ReactPagination {
  selected: number;
}

const usePagination = ({ postList }: UsePaginationProps) => {
  const [pageCount, setPageCount] = useState<number>(0);
  const [postListToShow, setPostListToShow] = useState<SanityPost[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isLastPost, setIsLastPost] = useState<boolean>(false);

  function handlePageClick(): void;
  function handlePageClick(data: ReactPagination): void;
  function handlePageClick(data?: ReactPagination): void {
    if (getDeviceType() === Device.Mobile) {
      setStartIndex((prev: number) => {
        return prev + 1;
      });
    } else {
      setStartIndex(Number(data?.selected));
    }
  }

  const paginatioInstancenWithMemo = useMemo(() => {
    const test = [
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
      ...postList,
    ];
    return new PaginationContoller<SanityPost>(test);
  }, []);

  useEffect(() => {
    setPageCount(paginatioInstancenWithMemo.getTotalPageCount());
  }, [postList]);

  useEffect(() => {
    console.log(
      paginatioInstancenWithMemo.allItems.length === paginatioInstancenWithMemo.getItemsToShow(startIndex).length,
    );
    setIsLastPost(
      paginatioInstancenWithMemo.allItems.length === paginatioInstancenWithMemo.getItemsToShow(startIndex).length,
    );
    setPostListToShow(paginatioInstancenWithMemo.getItemsToShow(startIndex));
  }, [startIndex]);

  return { pageCount, postListToShow, handlePageClick, isLastPost };
};

export default usePagination;
