import { Author } from './Author';

export interface Asset {
  url?: string;
  id?: number;
  node_id?: string;
  name?: string;
  label?: null;
  uploader?: Author;
  content_type?: string;
  state?: string;
  size?: number;
  download_count?: number;
  created_at?: Date;
  updated_at?: Date;
  browser_download_url?: string;
}