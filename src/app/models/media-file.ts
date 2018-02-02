/**
 * Data model for MediaFile objects
 */
export interface MediaFile {
  file_id:	number;
  user_id: 	number;
  filename: string;
  filesize: string;
  title: string;
  description: string;
  media_type: string;
  mime_type: string;
  time_added: string;
}
