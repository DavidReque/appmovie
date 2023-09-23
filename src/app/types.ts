export type Movie = {
    id: number;
    title: string;
    backdrop_path: string | null;
    release_date: string;
    overview: string
  };

  export type PostsProps = {
    params: { id: string }
  }

  export type filtersProps = {
    activeFilter: string,
    onChangeFilter: (filter: string) => void
  }
  