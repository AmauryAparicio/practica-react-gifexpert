export interface iGifResponse {
  data: Array<any>;
  pagination: Array<any>;
  meta: Array<any>;
}

export interface iGif {
  id: string;
  title: string;
  url: string;
}

export interface iGifObject {
  id: string;
  title: string;
  images: iImagesObject;
}

export interface iImagesObject {
  downsized_medium: iDownsizedMedium;
}

export interface iDownsizedMedium {
  url: string;
}

export interface iState {
  data: Array<iGif>;
  loading: boolean;
}

export interface iImg {
  id: string;
  title: string;
  url: string;
}
