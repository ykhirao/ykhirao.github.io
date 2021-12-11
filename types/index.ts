export interface Post {
  body: string
  id: number
  title: string
}

export interface QiitaUser {
    description: string,
    facebook_id: string,
    followees_count: number,
    followers_count: number,
    github_login_name: string,
    id: string,
    items_count: number,
    linkedin_id: string,
    location: string,
    name: string,
    organization: string,
    permanent_id: number,
    profile_image_url: string,
    team_only: boolean,
    twitter_screen_name: string,
    website_url: string,
}

export interface QiitaTag {
  name: string
  versions: string[]
}

export interface QiitaPost {
  rendered_body: string,
  body: string,
  coediting: boolean,
  comments_count: number,
  created_at: string,
  group?: null,
  id: string,
  likes_count: number,
  private: boolean,
  reactions_count: number,
  tags: QiitaTag[],
  title: string,
  updated_at: string,
  url: string,
  user: QiitaUser,
  page_views_count?: null,
  team_membership?: null
}

export interface ConnpassSeries {
  id: number;
  title: string;
  url: string;
}

export interface ConnpassEvent {
  event_id: number;
  title: string;
  catch: string;
  description: string;
  event_url: string;
  started_at: string;
  ended_at: string;
  limit: number;
  hash_tag: string;
  event_type: string;
  accepted: number;
  waiting: number;
  updated_at: string;
  owner_id: number;
  owner_nickname: string;
  owner_display_name: string;
  place: string;
  address: string;
  lat: null;
  lon: null;
  series: ConnpassSeries;
}
