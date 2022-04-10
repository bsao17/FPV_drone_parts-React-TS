import React, {Component} from 'react';

interface props {
    file: String,
    fileNumber?: number,
    dispo?: boolean
}

class Views3D extends Component {
    render() {
        return (
            <div className={""}>
                <video style={{width: "80%", margin: "auto"}} src="../../public/assets/videos/Antenna-FPV_2022.mp4" width={800} height={600} controls/>
            </div>
        );
    }
}

export default Views3D;