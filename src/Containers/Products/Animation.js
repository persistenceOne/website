import React from "react";
class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}vw`;
        this.setState({
            scrolled: scrolled
        });
    };
    render() {
        const progressBarStyle = {
            transform: `translate3d(-${this.state.scrolled}, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        };
        return (
            <section className="animation-section">
                <div data-w-id="9cbd5b83-3ee2-96a0-8f7e-8ae781153c45" className="bg-scroll-text" style={progressBarStyle}>
                    <div className="text-block-25">About</div>
                </div>
            </section>
        )
    }

}
export default Animation;