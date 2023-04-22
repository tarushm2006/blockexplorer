import { alchemy } from './alchemy';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateHash, updateNumber,updateMiner } from './blockSlice';
import Header from './components/header';
import Layout from './components/layout';
import './App.css';
import { updateTxs } from './slice/txSlice';

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [latestBlockHash,setLatestBlockHash] = useState([]);
  const [latestBlockNumber,setLatestBlockNumber] = useState([]);
  const [latestMiner, setLatestMiner ] = useState([]);
  const [latestTxs,setLatestTxs] = useState([]);
  const dispatch = useDispatch();

  alchemy.ws.on("block",async(blockNum)=>{
    setBlockNumber(blockNum);
  });

  useEffect(()=>{
    dispatch(updateHash(latestBlockHash));
    dispatch(updateNumber(latestBlockNumber));
    dispatch(updateMiner(latestMiner));
    dispatch(updateTxs(latestTxs));
    const fetch = async () =>{
      try{
      const response = await alchemy.core.getBlock(blockNumber);
     
      for(let i = 0;i <response.transactions.length;i++){
        if(latestTxs.length < 10 && latestTxs.length >= 1){
          setLatestTxs([response.transactions[i],...latestTxs]);
        }else if(latestTxs.length === 10){
          setLatestTxs([response.transactions[i],...latestTxs.slice(0,9)]);
        }else if(latestTxs.length === 0){
          setLatestTxs([response.transactions[i]]);
        }
      }
      if(latestBlockHash.length < 10 && latestBlockHash.length >= 1){
        setLatestBlockHash([response.hash,...latestBlockHash]);
        setLatestBlockNumber([response.number,...latestBlockNumber]);
        setLatestMiner([response.miner,...latestMiner]);
      }else if(latestBlockHash.length === 10){
        setLatestBlockHash([response.hash,...latestBlockHash.slice(0,9)])
        setLatestBlockNumber([response.number,...latestBlockNumber.slice(0,9)]);
        setLatestMiner([response.miner,...latestMiner.slice(0,9)]);
      }else if(latestBlockHash.length === 0){
        setLatestBlockHash([response.hash]);
        setLatestBlockNumber([response.number]);
        setLatestMiner([response.miner]);
      }
    }
      catch(e){
        console.log(e);
      }
    }
    fetch();
  },[blockNumber])


  return(
    <div className="grid grid-cols-1">
    <Header />
    <Layout blockNum={blockNumber} alchemy={alchemy}/>
    </div>
  );
}

export default App;
