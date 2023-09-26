export interface Movie {
  id: number
  title: string
  backdrop_path: string | null
  release_date: string
  overview: string
}

export interface PostsProps {
  params: { id: string }
}

export interface FiltersProps {
  activeFilter: string
  onChangeFilter: (value: string) => void
}
export interface FiltersPropsGender {
  activeFilterGender: string
  onChangeFilterGender: (value: string) => void
}
