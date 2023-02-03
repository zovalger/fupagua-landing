import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from "next/image";

function VideoLanding() {
  return (
<Image
          src={'/banners/Videos_banner.svg'}
          alt="First slide"
          width={600}
          height={600}
        />
  );
}

export default VideoLanding;