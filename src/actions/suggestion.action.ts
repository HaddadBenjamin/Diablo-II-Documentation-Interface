import ISuggestionItem, {
    ISuggestionVoteRequest,
} from "../models/Suggestion";

export enum SuggestionActionTypes
{
    GET_ALL_SUGGESTIONS = 'suggestions/getall',
    GETTING_ALL_SUGGESTIONS = 'suggestions/gettingall',
    GOT_ALL_SUGGESTIONS = 'suggestions/gotall',
    GETTING_ALL_SUGGESTIONS_FAILED = 'suggestions/gettingall_failed',

    CREATE_SUGGESTION = 'suggestions/create',
    CREATING_SUGGESTION = 'suggestions/creating',
    CREATED_SUGGESTION = 'suggestions/created',
    CREATING_SUGGESTION_FAILED = 'suggestions/creating_failed',

    ADD_VOTE = 'suggestions/vote',
    ADDING_VOTE = 'suggestions/voting',
    ADDED_VOTE = 'suggestions/voted',
    ADDING_VOTE_FAILED = 'suggestions/voting_failed',

    ADD_COMMENT = 'suggestions/comment',
    ADDING_COMMENT = 'suggestions/commenting',
    ADDED_COMMENT = 'suggestions/commented',
    ADDING_COMMENT_FAILED = 'suggestions/commenting_failed',

    DELETE_COMMENT = 'suggestions/delete_comment',
    DELETING_COMMENT = 'suggestions/deleting_comment',
    DELETED_COMMENT = 'suggestions/deleted_comment',
    DELETING_COMMENT_FAILED = 'suggestions/deleting_comment_failed',

    DELETE_SUGGESTION = 'suggestions/delete',
    DELETING_SUGGESTION = 'suggestions/deleting',
    DELETED_SUGGESTION = 'suggestions/deleted',
    DELETING_SUGGESTION_FAILED = 'suggestions/deleting_failed',
}

//region interfaces
//region Get all suggestions
export interface IGetAllSuggestionsAction
{
    type: SuggestionActionTypes.GET_ALL_SUGGESTIONS;
}

export interface IGettingAllSuggestionsAction
{
    type: SuggestionActionTypes.GETTING_ALL_SUGGESTIONS;
}

export interface IGotAllSuggestionsAction
{
    type: SuggestionActionTypes.GOT_ALL_SUGGESTIONS;
    payload: {
        suggestions: ISuggestionItem[]
    }
}

export interface IGettingAllSuggestionsFailedAction
{
    type: SuggestionActionTypes.GETTING_ALL_SUGGESTIONS_FAILED;
}
//endregion

//region Create a suggestion
export interface ICreateSuggestionAction
{
    type : SuggestionActionTypes.CREATE_SUGGESTION,
    payload : {
        content : string
    }
}

export interface ICreatingSuggestionAction
{
    type : SuggestionActionTypes.CREATING_SUGGESTION
}

export interface ICreatedSuggestionAction
{
    type : SuggestionActionTypes.CREATED_SUGGESTION,
    payload : {
        suggestion : ISuggestionItem
    }
}

export interface ICreatingSuggestionFailedAction
{
    type : SuggestionActionTypes.CREATING_SUGGESTION_FAILED
}
//endregion

//region Add a vote to a suggestion
export interface IAddVoteAction
{
    type : SuggestionActionTypes.ADD_VOTE,
    payload : {
        suggestionId : string,
        isPositive : boolean
    }
}

export interface IAddingVoteAction
{
    type : SuggestionActionTypes.ADDING_VOTE
}

export interface IAddedVoteAction
{
    type : SuggestionActionTypes.ADDED_VOTE,
    payload : {
        suggestion : ISuggestionItem
    }
}

export interface IAddingVoteFailedAction
{
    type : SuggestionActionTypes.ADDING_VOTE_FAILED
}
//endregion

//region Add comment to a suggestion
export interface IAddCommentAction
{
    type : SuggestionActionTypes.ADD_COMMENT,
    payload: {
        suggestionId : string,
        comment : string
    }
}

export interface IAddingCommentAction
{
    type : SuggestionActionTypes.ADDING_COMMENT
}

export interface IAddedCommentAction
{
    type : SuggestionActionTypes.ADDED_COMMENT,
    payload : {
        suggestion : ISuggestionItem
    }
}

export interface IAddingCommentFailedAction
{
    type : SuggestionActionTypes.ADDING_COMMENT_FAILED
}
//endregion

//region Delete a suggestion
export interface IDeleteSuggestionAction
{
    type : SuggestionActionTypes.DELETE_SUGGESTION,
    payload : {
        suggestionId : string
    }
}

export interface IDeletingSuggestionAction
{
    type : SuggestionActionTypes.DELETING_SUGGESTION
}

export interface IDeletedSuggestionAction
{
    type : SuggestionActionTypes.DELETED_SUGGESTION
    payload : {
        suggestionId : string
    }
}

export interface IDeletingSuggestionFailedAction
{
    type : SuggestionActionTypes.DELETING_SUGGESTION_FAILED
}
//endregion

//region Delete a suggestion comment
export interface IDeleteCommentAction
{
    type : SuggestionActionTypes.DELETE_COMMENT,
    payload : {
        id : string,
        suggestionId : string
    }
}

export interface IDeletingCommentAction
{
    type : SuggestionActionTypes.DELETING_COMMENT
}

export interface IDeletedCommentAction
{
    type : SuggestionActionTypes.DELETED_COMMENT,
    payload : {
        suggestion : ISuggestionItem
    }
}

export interface IDeletingCommentFailedAction
{
    type : SuggestionActionTypes.DELETING_COMMENT_FAILED,
}
//endregion
//endregion

//region implementations
//region Get all suggestions
export function getAllSuggestions(): IGetAllSuggestionsAction
{
    return {
        type: SuggestionActionTypes.GET_ALL_SUGGESTIONS
    }
}

export function gettingAllSuggestions(): IGettingAllSuggestionsAction
{
    return {
        type: SuggestionActionTypes.GETTING_ALL_SUGGESTIONS
    }
}

export function gotAllSuggestions(suggestions: ISuggestionItem[]): IGotAllSuggestionsAction
{
    return {
        type: SuggestionActionTypes.GOT_ALL_SUGGESTIONS,
        payload: {
            suggestions : suggestions
        }
    }
}

export function gettingAllSuggestionsFailed(): IGettingAllSuggestionsFailedAction
{
    return {
        type: SuggestionActionTypes.GETTING_ALL_SUGGESTIONS_FAILED
    }
}
//endregion

//region Create a suggestion
export function createSuggestion(content : string) : ICreateSuggestionAction
{
    return {
        type : SuggestionActionTypes.CREATE_SUGGESTION,
        payload : {
            content : content
        }
    }
}

export function creatingSuggestion() : ICreatingSuggestionAction
{
    return {
        type : SuggestionActionTypes.CREATING_SUGGESTION
    }
}

export function createdSuggestion(suggestion : ISuggestionItem) : ICreatedSuggestionAction
{
    return {
        type : SuggestionActionTypes.CREATED_SUGGESTION,
        payload : {
            suggestion : suggestion
        }
    }
}

export function creatingSuggestionFailed() : ICreatingSuggestionFailedAction
{
    return {
        type : SuggestionActionTypes.CREATING_SUGGESTION_FAILED
    }
}
//endregion

//region Add a vote to a suggestion
export function addVote(request : ISuggestionVoteRequest) : IAddVoteAction
{
    return {
        type : SuggestionActionTypes.ADD_VOTE,
        payload : {
            suggestionId : request.SuggestionId,
            isPositive : request.IsPositive
        }
    }
}

export function addindVote() : IAddingVoteAction
{
    return {
        type : SuggestionActionTypes.ADDING_VOTE
    }
}

export function addedVote(suggestion : ISuggestionItem) : IAddedVoteAction
{
    return {
        type : SuggestionActionTypes.ADDED_VOTE,
        payload : {
            suggestion : suggestion
        }
    }
}

export function addingVoteFailed() : IAddingVoteFailedAction
{
    return {
        type : SuggestionActionTypes.ADDING_VOTE_FAILED
    }
}
//endregion

//region Add a comment to a suggestion
export function addComment(suggestionId : string, comment : string) : IAddCommentAction
{
    return {
        type : SuggestionActionTypes.ADD_COMMENT,
        payload : {
            suggestionId : suggestionId,
            comment : comment
        }
    }
}

export function addingComment() : IAddingCommentAction
{
    return {
        type: SuggestionActionTypes.ADDING_COMMENT
    }
}

export function addedComment(suggestion : ISuggestionItem) : IAddedCommentAction
{
    return {
        type: SuggestionActionTypes.ADDED_COMMENT,
        payload : {
            suggestion : suggestion
        }

    }
}

export function addingCommentFailed() : IAddingCommentFailedAction
{
    return {
        type : SuggestionActionTypes.ADDING_COMMENT_FAILED
    }
}
//endregion

//region Delete a suggestion
export function deleteSuggestion(suggestionId : string) : IDeleteSuggestionAction
{
    return {
        type : SuggestionActionTypes.DELETE_SUGGESTION,
        payload : {
            suggestionId : suggestionId
        }
    }
}

export function deletingSuggestion() : IDeletingSuggestionAction
{
    return {
        type : SuggestionActionTypes.DELETING_SUGGESTION
    }
}

export function deletedSuggestion(suggestionId : string) : IDeletedSuggestionAction
{
    return {
        type : SuggestionActionTypes.DELETED_SUGGESTION,
        payload : {
            suggestionId : suggestionId
        }
    }
}

export function deletingSuggestionFailed() : IDeletingSuggestionFailedAction
{
    return {
        type : SuggestionActionTypes.DELETING_SUGGESTION_FAILED,
    }
}
//endregion

//region Delete a suggestion comment
export function deleteComment(id : string, suggestionId : string) : IDeleteCommentAction
{
    return {
        type : SuggestionActionTypes.DELETE_COMMENT,
        payload : {
            id : id,
            suggestionId : suggestionId
        }
    }
}

export function deletingComment() : IDeletingCommentAction
{
    return {
        type : SuggestionActionTypes.DELETING_COMMENT
    }
}

export function deletedComment(suggestion : ISuggestionItem) : IDeletedCommentAction
{
    return {
        type: SuggestionActionTypes.DELETED_COMMENT,
        payload : {
            suggestion : suggestion
        }
    }
}

export function deletingCommentFailed() : IDeletingCommentFailedAction
{
    return {
        type : SuggestionActionTypes.DELETING_COMMENT_FAILED
    }
}
//endregion
//endregion

export type SuggestionsAction =
    IGetAllSuggestionsAction |
    IGettingAllSuggestionsAction |
    IGotAllSuggestionsAction |
    IGettingAllSuggestionsFailedAction |

    ICreateSuggestionAction |
    ICreatingSuggestionAction |
    ICreatedSuggestionAction |
    ICreatingSuggestionFailedAction |

    IAddVoteAction |
    IAddingVoteAction |
    IAddedVoteAction |
    IAddingVoteFailedAction |

    IAddCommentAction |
    IAddingCommentAction |
    IAddedCommentAction |
    IAddingCommentFailedAction |

    IDeleteSuggestionAction |
    IDeletingSuggestionAction |
    IDeletedSuggestionAction |
    IDeletingSuggestionFailedAction |

    IDeleteCommentAction |
    IDeletingCommentAction |
    IDeletedCommentAction |
    IDeletingCommentFailedAction;
