import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiGetItemInfos } from "../../../api/item";
import { updateItemList } from "../../../redux/itemListSlice";
import { addSearchList } from "../../../redux/searchListSlice";

const useSummonerContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    query: { summonerName },
  } = router;

  useEffect(() => {
    const itemInitialize = async () => {
      const { data } = await apiGetItemInfos();
      dispatch(updateItemList(data));
    };

    itemInitialize();
  }, []);

  useEffect(() => {
    if (typeof summonerName === "string") {
      dispatch(addSearchList(summonerName));
    }
  }, [summonerName]);
};

export default useSummonerContainer;
