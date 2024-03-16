import { SVGProps } from "react"

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="rgba(49,183,49,1)"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415L7.243 17.997Zm-4.243 2h18v2H3v-2Z" />
  </svg>
)
export default EditIcon