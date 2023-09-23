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

  export type FiltersProps = {
    activeFilter: string,
    onChangeFilter: (value: string) => void
  }
  