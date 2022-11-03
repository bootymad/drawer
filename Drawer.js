import { useRef } from "react";
import chevron from "./chevron-right-solid.svg";

export default function Drawer({ children, summary, maxWidth = "auto" }) {
	const contentBox = useRef();
	const chevronBox = useRef();

	// styles - seems to save between renders
	const styles = {
		container: {
			maxWidth: maxWidth,
			boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
		},
		summary: {
			backgroundColor: "white",
			borderRadius: "5px 5px 0px 0px",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			gap: "0.5rem",
			padding: "1rem",
		},
		content: {
			maxHeight: "0px",
			backgroundColor: "white",
			borderRadius: "0px 0px 5px 5px",
			overflow: "hidden",
			transition: "max-height 500ms, margin-bottom 500ms",
			boxSizing: "border-box",
		},
		contentWrapper: {
			padding: "1rem",
		},
		chevron: {
			height: "1rem",
			transition: "transform 250ms",
		},
	};

	// click handler
	const clickHandler = () => {
		const { style: contentStyle } = contentBox.current;
		const { style: chevronStyle } = chevronBox.current;
		console.log(contentStyle, chevronStyle.transform);
		contentStyle.maxHeight === "0px" || contentStyle.maxHeight === ""
			? (contentStyle.maxHeight = "100vh")
			: (contentStyle.maxHeight = "0px");
		chevronStyle.transform === "rotate(0deg)" ||
		chevronStyle.transform === ""
			? (chevronStyle.transform = "rotate(90deg)")
			: (chevronStyle.transform = "rotate(0deg)");
		contentStyle.marginBottom === "0px" || contentStyle.marginBottom === ""
			? (contentStyle.marginBottom = "1rem")
			: (contentStyle.marginBottom = "0");
	};
	return (
		<div style={styles.container}>
			<div style={styles.summary} onClick={clickHandler}>
				<div>{summary}</div>
				<img
					ref={chevronBox}
					style={styles.chevron}
					src={chevron}
				></img>
			</div>
			<div ref={contentBox} style={styles.content}>
				<div style={styles.contentWrapper}>{children}</div>
			</div>
		</div>
	);
}
