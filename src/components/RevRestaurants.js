import React, { useState, useEffect } from 'react';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridList from '@material-ui/core/GridList';

import Button from '@material-ui/core/Button';

import ListSubheader from '@material-ui/core/ListSubheader';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    gridList: {
        width: 700,
        height: 1000,
    },
}));



export default function RevRestaurants() {
    const classes = useStyles();
    const [rest, setRest] = React.useState([]);
    const [type, setType] = React.useState('');

    useEffect(() => {
        fetch('./MyJson.json').then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRest(data.restaurants);

            })
    }, []); // eslint-disable-line


    const sorted = rest.sort((a, b) => {
        const isReversed = (type === 'desc') ? 1 : -1;
        return isReversed * a.name.localeCompare(b.name)
    });


    return (
        <>
            <GridList cols={3} cellHeight={250} style={{ margin: '200', width: '100%' }} className={classes.gridList}>
                <GridListTile key="Subheader" cols={3} style={{ height: 'auto', }}>
                    <ListSubheader component="div">
                        <Link component={RouterLink} to="/">
                            <Button variant="contained" size="large" color="primary">
                                SORT RESTAURANTS A TO Z </Button>
                        </Link>
                    </ListSubheader>
                </GridListTile>
                {sorted.map((item, i) => (
                    <GridListTile cols={1} rows={1} key={i} style={{ padding: '1vh' }}>
                        <img
                            src={item.image}
                        />
                        <GridListTileBar title={item.name} subtitle={<span>{item.description}</span>} />
                    </GridListTile>))}
            </GridList>
        </>
    );
}

