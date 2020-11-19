import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Button, Grid, Grow, Typography, Switch} from "@material-ui/core"
import {Favorite,FavoriteBorder}from "@material-ui/icons"
import './App.css';
import useStyles from './styles.js';
import NewsCards from "./components/NewsCards/NewsCards";
const alanKey = 'e5c34817362ebb935a6e55d25797fe622e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() 
{
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setactiveArticle]  = useState(0);
	const classes = useStyles();
	useEffect(()=> {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) =>{
				if (command === 'newHeadlines') {
					setNewsArticles(articles);
				}else if(command === 'highlight'){
					setactiveArticle((prev)=>prev+1);
				}
			}
		})
	}, [])
  return (
    <div>
      <div className={classes.logoContainer}>
         <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alanLogo"/>
      </div>
      <div>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
