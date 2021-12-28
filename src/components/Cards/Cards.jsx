import React from 'react'
import { Card , CardContent , Grid , Typography } from '@material-ui/core';
import styles from "./Card.module.css"
import CountUp from "react-countup";
import cx from "classnames"


const Cards = ({data:{confirmed ,  deaths , lastUpdate}}) => {
    
    if(!confirmed){
        return "...loading"
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}  end={confirmed.value} duration={4.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}  end={179111991} duration={3} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of  recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0}  end={deaths.value} duration={4.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards
