declare module "*.svg" {
	const content: React.FC<React.SVGProps<SVGSVGElement>>;
	// eslint-disable-next-line import/no-default-export
	export default content;
}
