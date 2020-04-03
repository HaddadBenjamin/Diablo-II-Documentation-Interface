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

    DELETE_SUGGESTION = 'suggestions/delete',
    DELETING_SUGGESTION = 'suggestions/deleting',
    DELETED_SUGGESTION = 'suggestions/deleted',
    DELETING_SUGGESTION_FAILED = 'suggestions/deleting_failed',
}

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

export interface IAddVoteAction
{
    type : SuggestionActionTypes.ADD_VOTE,
    payload : {
        suggestionId : string,
        isPositive : boolean,
        ip : string
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

export function addVote(request : ISuggestionVoteRequest) : IAddVoteAction
{
    return {
        type : SuggestionActionTypes.ADD_VOTE,
        payload : {
            suggestionId : request.SuggestionId,
            isPositive : request.IsPositive,
            ip : request.Ip
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

export function addingVoteFailed() : IAddingVoteFailedAction
{
    return {
        type : SuggestionActionTypes.ADDING_VOTE_FAILED
    }
}

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

    IDeleteSuggestionAction |
    IDeletingSuggestionAction |
    IDeletedSuggestionAction |
    IDeletingSuggestionFailedAction;
