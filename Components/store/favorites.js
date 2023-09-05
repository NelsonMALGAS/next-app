import { createContext ,useState } from "react";

const FavoriteContext = createContext({
	favorites: [],
	totalFavorites: 0,
    addFavorite : (favorite) =>{},
    removeFavorite : (favoriteID) =>{},
    itemIsFavorite : (favoriteID) =>{},
});

 export function FavoritesContextProvider(props) {

    const [userFavorites ,setUserFavorites] = useState([])
	const { children } = props;
	const context = {
        favorites : userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite : addFavoritesHandler,
        removeFavorite : removeFavoritesHandler,
        itemIsFavorite : itemIsFavoriteHandler
    };

    function addFavoritesHandler(favorite){
        setUserFavorites((prevFav)=>{
            return prevFav.concat(favorite)
        })
    }

    function removeFavoritesHandler(favoriteID){
        setUserFavorites((prevFav)=>{
            return prevFav.filter(fav  => fav.id !== favoriteID)
        })
    }

    function itemIsFavoriteHandler(favoriteId) {
    const foundFavorite = userFavorites.find(fav => fav.id === favoriteId);
    return foundFavorite !== undefined;
}

	return (
		<FavoriteContext.Provider value={context}>
			{children}
		</FavoriteContext.Provider>
	);
}

export default FavoriteContext
