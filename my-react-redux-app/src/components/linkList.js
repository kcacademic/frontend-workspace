import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function LinkList(props) {
    var regex = /https:\/\/images.dog.ceo\/breeds\/(.*)\//;
    return (       
        <Grid container spacing={24} style={{padding: 24}}>
            { props.url.map(url => (
                <Grid key={url} item xs>
                    <img height="200" width="200" alt="dog" src={url} />
                    <a href={url}> {regex.exec(url)[1]} </a>
                </Grid>
            ))}
        </Grid>
    );
}