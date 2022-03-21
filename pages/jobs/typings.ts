export interface Job {
  id: number,
  job: {
    id: number,
    due_date: string,
    title: string,
    unit: {
      id: number,
      name: string,
      display_name: string,
      address: string,
      logo_url:
        string,
    },
    address: string,
    poster: {
      id: number,
      username: string,
      first_name: string,
      last_name: string,
      full_name: string,
      user_profile: {
        id: number,
        profile_picture_url:
          string,
      },
    },
    position_function_id: number,
    position_function: {
      id: number,
      name_en: string,
      name_nb: string,
    },
    country_long_name: string,
    administrative_area_level_1: string,
    administrative_area_level_2: string,
    postal_town: string,
    employment_type: string,
    get_share_url: string,
    apply_url: string,
  },
  created_at: string,
  updated_at: string,
  global_background_rgba: string,
  global_text_style: string,
  global_divider_status: boolean,
  job_listing_header: {
    id: number,
    job_listing_id: number,
    background_image_url:
      string,
    background_image_thumbnail:
      string,
    background_rgba: string,
    font_rgba: string,
    title: string,
    title_rich: string,
    subtitle: string,
    subtitle_rich:
      string,
    created_at: string,
    updated_at: string,
  },
  publisher_published_at: string,
  publisher_modified_at: string,
  job_listing_description: {
    id: number,
    job_listing_id: number,
    background_image_url: string,
    background_image_thumbnail: string,
    background_rgba: string,
    font_rgba: string,
    title: string,
    title_rich: string,
    subtitle:
      string,
    subtitle_rich:
      string,
    created_at: string,
    updated_at: string,
  },
  job_listing_unit_description: {
    id: number,
    job_listing_id: number,
    background_image_url: string,
    background_image_thumbnail: string,
    background_rgba: string,
    font_rgba: string,
    title: string,
    title_rich: string,
    subtitle:
      string,
    subtitle_rich:
      string,
    created_at: string,
    updated_at: string,
  },
  youtube_video_ids: string,
  vimeo_video_ids: string,
  image_urls: [],
}

export interface PositionFunction {
  id: number
  children: string[]
  num_live_jobs: string
  parent_id: number
  created_at: string // datetime
  updated_at: string // datetime
  name: string
  name_en?: string
  name_nb?: string
  finn_occupation_code: string
  styrk_codes?: {
    [key: string]: string
  }
}

export interface PaginatedPositionFunctionList {
  count: number
  next?: string
  previous?: string
  results: PositionFunction[]
}
