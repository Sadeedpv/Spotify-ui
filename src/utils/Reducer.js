export const initialState = {
    token:null,
    playlists:[],
    images:'',
    user:null,
    genres:null,
    selectedPlaylistId:'37i9dQZF1E37jO8SiMT0yN', // Default playlist Id
    Playlistdetails:null,
    currentTrack:null,
    playingState:false
}

const reducer =  (state, action)=>{
    switch(action.type){
        case "SET_TOKEN":
            return {
                ...state, token:action.token
            }
        case "SET_PLAYLIST":
            return{
                ...state, playlists:action.playlists
            }
        case "SET_IMAGES":
            return{
                ...state, images:action.images
            }
        case "SET_USER":
            return{
                ...state, user:action.user
            }
        case "SET_GENRES":
            return {
                ...state, genres:action.genres
            }
        case "SET_PLAYLIST_ID":
            return {
                ...state, selectedPlaylistId:action.selectedPlaylistId
            }
        case "SET_PLAYLIST_DETAILS":
            return {
                ...state, Playlistdetails:action.Playlistdetails
            }
        case "SET_CURRENT_TRACK":
            return{
                ...state, currentTrack:action.currentTrack
            }
        case "SET_PLAYING_STATE":
            return{
                ...state, playingState:action.playingState
            }
        default:
            return state
    }
}

export default reducer
