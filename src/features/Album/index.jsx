import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Điều em muốn nói',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/a/6/4/0a640d3275b984567ba6aa2ae8a22d16.jpg'
    },
    {
      id: 2,
      name: 'Cười đi chờ chi',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/a/c/3/4ac306685b7c4c9920a0f3f1be9803ef.jpg'
    },
    {
      id: 33,
      name: 'Nhạc hoa ngọt ngào',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/5/6/c/e56c5ee7dcd0a5e1bc48ee3d1ac125fe.jpg'
    }
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích nè</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;