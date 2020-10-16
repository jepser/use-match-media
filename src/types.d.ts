export type IMediaQuery = Array<string>

export type IMatchedMedia = Array<boolean>

export default function useMatchMedia (queries: IMediaQuery): IMatchedMedia
