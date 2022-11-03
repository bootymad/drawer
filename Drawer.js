import { useRef } from "react";
import chevron from "./chevron-right-solid.svg";

export default function Drawer({ children, summary, maxWidth = "auto" }) {
	const contentBox = useRef();
	const chevronBox = useRef();

	// styles - seems to save between renders
	const styles = {
		container: {
			maxWidth: maxWidth,
		},
		summary: {
			backgroundColor: "beige",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			gap: "0.5rem",
			padding: "1rem",
		},
		content: {
			maxHeight: "0px",
			overflow: "hidden",
			transition: "max-height 250ms",
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
			? (contentStyle.maxHeight = "fit-content")
			: (contentStyle.maxHeight = "0px");
		chevronStyle.transform === "rotate(0deg)" ||
		chevronStyle.transform === ""
			? (chevronStyle.transform = "rotate(90deg)")
			: (chevronStyle.transform = "rotate(0deg)");
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
				{children}
			</div>
		</div>
	);
}
