export type Comment = {
  review: string,
  rating: number,
};

export type CommentFormData = Comment & {
  offerId: string | undefined,
  setIsDisabled: (arg0: boolean) => void,
  setFormData: (arg0: Comment) => void,
}
