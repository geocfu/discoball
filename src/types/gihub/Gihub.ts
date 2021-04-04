import { Author } from './Author';
import { Asset } from './Asset';

export interface Gihub {
  url?: string;
  assets_url?: string;
  upload_url?: string;
  html_url?: string;
  id?: number;
  author?: Author;
  node_id?: string;
  tag_name?: string;
  target_commitish?: string;
  name?: string;
  draft?: boolean;
  prerelease?: boolean;
  created_at?: Date;
  published_at?: Date;
  assets?: Asset[];
  tarball_url?: string;
  zipball_url?: string;
  body?: string;

  // on error
  message?: string;
  documentation_url?: string;
}