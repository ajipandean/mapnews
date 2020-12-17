import React from 'react';

export default ({ Marker, post }) => (
  <Marker
    title={post.title}
    description={post.description}
    coordinate={{
      latitude: post.location.latitude,
      longitude: post.location.longitude,
    }}
  />
);
