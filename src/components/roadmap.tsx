import styles from "./roadmap.less";

export default function Roadmap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmapTitle}>Roadmap</div>
      <div className={styles.timeline}>
        <svg
          width="100%"
          height="72"
          viewBox="0 0 1194 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="3.9924"
            y1="56.9924"
            x2="1190.99"
            y2="53.9899"
            stroke="url(#paint0_linear_65_2)"
            stroke-width="6"
            stroke-linecap="round"
          />
          <path
            d="M554.867 17.3379C554.867 17.6504 554.799 17.9271 554.662 18.168C554.532 18.4089 554.356 18.6107 554.135 18.7734C553.907 18.9427 553.637 19.0697 553.324 19.1543C553.018 19.2389 552.686 19.2812 552.328 19.2812C551.905 19.2812 551.514 19.2292 551.156 19.125C550.805 19.0208 550.499 18.8613 550.238 18.6465C549.971 18.4382 549.76 18.1745 549.604 17.8555C549.454 17.5299 549.363 17.1491 549.33 16.7129H546.986C546.993 17.3965 547.13 18.002 547.396 18.5293C547.67 19.0566 548.038 19.5156 548.5 19.9062C549.001 20.3229 549.59 20.6419 550.268 20.8633C550.945 21.0781 551.632 21.1855 552.328 21.1855C552.986 21.1855 553.611 21.1042 554.203 20.9414C554.796 20.7721 555.316 20.5215 555.766 20.1895C556.208 19.8704 556.56 19.4701 556.82 18.9883C557.087 18.5065 557.221 17.9499 557.221 17.3184C557.221 16.6348 557.068 16.0326 556.762 15.5117C556.462 14.9844 556.062 14.5319 555.561 14.1543C555.157 13.8548 554.714 13.6009 554.232 13.3926C553.757 13.1777 553.269 12.9987 552.768 12.8555C552.37 12.7383 551.99 12.6113 551.625 12.4746C551.267 12.3379 550.948 12.1784 550.668 11.9961C550.395 11.8138 550.176 11.6022 550.014 11.3613C549.851 11.1139 549.766 10.8275 549.76 10.502C549.76 10.196 549.822 9.91927 549.945 9.67188C550.069 9.42448 550.242 9.21289 550.463 9.03711C550.684 8.86784 550.945 8.73763 551.244 8.64648C551.55 8.54883 551.882 8.5 552.24 8.5C552.65 8.5 553.012 8.56185 553.324 8.68555C553.643 8.80273 553.913 8.96549 554.135 9.17383C554.35 9.38867 554.516 9.64583 554.633 9.94531C554.757 10.2383 554.835 10.5638 554.867 10.9219H557.191C557.191 10.2773 557.061 9.69141 556.801 9.16406C556.547 8.63021 556.199 8.17122 555.756 7.78711C555.313 7.40951 554.792 7.11654 554.193 6.9082C553.601 6.69336 552.96 6.58594 552.27 6.58594C551.618 6.58594 550.997 6.67708 550.404 6.85938C549.818 7.03516 549.304 7.29232 548.861 7.63086C548.419 7.97591 548.067 8.39258 547.807 8.88086C547.546 9.36263 547.416 9.90625 547.416 10.5117C547.416 11.0716 547.527 11.5762 547.748 12.0254C547.976 12.4681 548.288 12.8652 548.686 13.2168C549.083 13.5618 549.561 13.8743 550.121 14.1543C550.688 14.4277 551.306 14.6589 551.977 14.8477C552.413 14.9714 552.807 15.1113 553.158 15.2676C553.516 15.4173 553.826 15.5866 554.086 15.7754C554.333 15.9772 554.525 16.2051 554.662 16.459C554.799 16.7129 554.867 17.0059 554.867 17.3379ZM565.844 21V6.78125H565.697L559.848 8.94922V11.0098L563.49 9.67188V21H565.844ZM592.602 21V19.1152H585.98L589.145 15.7363C589.561 15.2936 589.945 14.8639 590.297 14.4473C590.655 14.0306 590.964 13.6172 591.225 13.207C591.479 12.7969 591.677 12.3835 591.82 11.9668C591.97 11.5436 592.045 11.1074 592.045 10.6582C592.045 10.0592 591.947 9.51237 591.752 9.01758C591.557 8.51628 591.273 8.08659 590.902 7.72852C590.525 7.37044 590.059 7.09049 589.506 6.88867C588.959 6.68685 588.337 6.58594 587.641 6.58594C586.898 6.58594 586.225 6.70638 585.619 6.94727C585.02 7.18815 584.512 7.51367 584.096 7.92383C583.673 8.33398 583.347 8.81576 583.119 9.36914C582.891 9.91602 582.777 10.4987 582.777 11.1172H585.121C585.121 10.707 585.173 10.3424 585.277 10.0234C585.382 9.69792 585.538 9.42122 585.746 9.19336C585.948 8.97852 586.202 8.8125 586.508 8.69531C586.814 8.57812 587.175 8.51953 587.592 8.51953C587.917 8.51953 588.21 8.57487 588.471 8.68555C588.738 8.79622 588.965 8.94922 589.154 9.14453C589.343 9.33984 589.486 9.57422 589.584 9.84766C589.682 10.1211 589.73 10.4238 589.73 10.7559C589.73 11.0033 589.695 11.2507 589.623 11.498C589.558 11.7389 589.447 11.9993 589.291 12.2793C589.128 12.5592 588.917 12.8685 588.656 13.207C588.396 13.5391 588.074 13.9167 587.689 14.3398L583.061 19.3789V21H592.602ZM604.682 15.5801V12.2109C604.682 11.2995 604.574 10.4954 604.359 9.79883C604.145 9.0957 603.842 8.50326 603.451 8.02148C603.048 7.54622 602.559 7.18815 601.986 6.94727C601.42 6.69987 600.775 6.57617 600.053 6.57617C599.337 6.57617 598.692 6.69987 598.119 6.94727C597.553 7.18815 597.071 7.54622 596.674 8.02148C596.277 8.50326 595.971 9.0957 595.756 9.79883C595.548 10.4954 595.443 11.2995 595.443 12.2109V15.5801C595.443 16.4915 595.548 17.2988 595.756 18.002C595.971 18.6986 596.28 19.2812 596.684 19.75C597.081 20.2318 597.566 20.5964 598.139 20.8438C598.712 21.0846 599.356 21.2051 600.072 21.2051C600.795 21.2051 601.439 21.0846 602.006 20.8438C602.579 20.5964 603.061 20.2318 603.451 19.75C603.848 19.2812 604.151 18.6986 604.359 18.002C604.574 17.2988 604.682 16.4915 604.682 15.5801ZM597.787 14.75C597.787 14.5612 597.787 14.4017 597.787 14.2715C597.787 14.1413 597.787 13.9525 597.787 13.7051V11.791C597.787 11.2051 597.839 10.6973 597.943 10.2676C598.048 9.83138 598.207 9.47656 598.422 9.20312C598.604 8.96224 598.832 8.77995 599.105 8.65625C599.379 8.53255 599.695 8.4707 600.053 8.4707C600.385 8.4707 600.681 8.52279 600.941 8.62695C601.208 8.73112 601.433 8.88737 601.615 9.0957C601.824 9.33008 601.983 9.63281 602.094 10.0039C602.211 10.375 602.283 10.8145 602.309 11.3223L597.787 14.75ZM602.328 15.9707C602.328 16.5697 602.273 17.0905 602.162 17.5332C602.058 17.9759 601.898 18.334 601.684 18.6074C601.495 18.8418 601.267 19.0208 601 19.1445C600.733 19.2617 600.424 19.3203 600.072 19.3203C599.714 19.3203 599.398 19.2585 599.125 19.1348C598.858 19.0111 598.633 18.8255 598.451 18.5781C598.269 18.3503 598.122 18.0638 598.012 17.7188C597.908 17.3737 597.839 16.9766 597.807 16.5273L602.328 13.1191C602.328 13.3079 602.328 13.4902 602.328 13.666C602.328 13.8418 602.328 14.0111 602.328 14.1738V15.9707ZM616.625 21V19.1152H610.004L613.168 15.7363C613.585 15.2936 613.969 14.8639 614.32 14.4473C614.678 14.0306 614.988 13.6172 615.248 13.207C615.502 12.7969 615.701 12.3835 615.844 11.9668C615.993 11.5436 616.068 11.1074 616.068 10.6582C616.068 10.0592 615.971 9.51237 615.775 9.01758C615.58 8.51628 615.297 8.08659 614.926 7.72852C614.548 7.37044 614.083 7.09049 613.529 6.88867C612.982 6.68685 612.361 6.58594 611.664 6.58594C610.922 6.58594 610.248 6.70638 609.643 6.94727C609.044 7.18815 608.536 7.51367 608.119 7.92383C607.696 8.33398 607.37 8.81576 607.143 9.36914C606.915 9.91602 606.801 10.4987 606.801 11.1172H609.145C609.145 10.707 609.197 10.3424 609.301 10.0234C609.405 9.69792 609.561 9.42122 609.77 9.19336C609.971 8.97852 610.225 8.8125 610.531 8.69531C610.837 8.57812 611.199 8.51953 611.615 8.51953C611.941 8.51953 612.234 8.57487 612.494 8.68555C612.761 8.79622 612.989 8.94922 613.178 9.14453C613.367 9.33984 613.51 9.57422 613.607 9.84766C613.705 10.1211 613.754 10.4238 613.754 10.7559C613.754 11.0033 613.718 11.2507 613.646 11.498C613.581 11.7389 613.471 11.9993 613.314 12.2793C613.152 12.5592 612.94 12.8685 612.68 13.207C612.419 13.5391 612.097 13.9167 611.713 14.3398L607.084 19.3789V21H616.625ZM622.055 12.8359V14.6719H623.451C623.855 14.6719 624.219 14.7207 624.545 14.8184C624.877 14.9095 625.16 15.0495 625.395 15.2383C625.629 15.4336 625.808 15.6777 625.932 15.9707C626.055 16.2637 626.117 16.6152 626.117 17.0254C626.117 17.39 626.062 17.7155 625.951 18.002C625.847 18.2819 625.694 18.5163 625.492 18.7051C625.284 18.9069 625.027 19.0599 624.721 19.1641C624.421 19.2617 624.083 19.3105 623.705 19.3105C623.354 19.3105 623.031 19.2585 622.738 19.1543C622.452 19.0501 622.204 18.9036 621.996 18.7148C621.781 18.5326 621.615 18.3112 621.498 18.0508C621.387 17.7839 621.332 17.4941 621.332 17.1816H618.998C618.998 17.8457 619.125 18.4284 619.379 18.9297C619.639 19.4245 619.984 19.8411 620.414 20.1797C620.844 20.5182 621.342 20.7721 621.908 20.9414C622.475 21.1107 623.064 21.1953 623.676 21.1953C624.353 21.1953 624.981 21.1042 625.561 20.9219C626.146 20.7331 626.654 20.4596 627.084 20.1016C627.507 19.75 627.839 19.3171 628.08 18.8027C628.327 18.2819 628.451 17.6895 628.451 17.0254C628.451 16.6673 628.409 16.3223 628.324 15.9902C628.24 15.6517 628.103 15.3359 627.914 15.043C627.725 14.7565 627.481 14.4993 627.182 14.2715C626.889 14.0371 626.531 13.8483 626.107 13.7051C626.465 13.5423 626.778 13.3438 627.045 13.1094C627.312 12.875 627.533 12.6243 627.709 12.3574C627.885 12.084 628.015 11.8008 628.1 11.5078C628.191 11.2148 628.236 10.9219 628.236 10.6289C628.236 9.96484 628.126 9.38216 627.904 8.88086C627.683 8.37956 627.37 7.95638 626.967 7.61133C626.57 7.27279 626.088 7.01888 625.521 6.84961C624.962 6.67383 624.346 6.58594 623.676 6.58594C623.018 6.58594 622.413 6.68359 621.859 6.87891C621.312 7.07422 620.837 7.3444 620.434 7.68945C620.03 8.04102 619.714 8.45443 619.486 8.92969C619.258 9.40495 619.145 9.92578 619.145 10.4922H621.479C621.479 10.1862 621.534 9.90951 621.645 9.66211C621.762 9.41471 621.921 9.20312 622.123 9.02734C622.318 8.85156 622.549 8.7181 622.816 8.62695C623.09 8.5293 623.386 8.48047 623.705 8.48047C624.063 8.48047 624.379 8.5293 624.652 8.62695C624.932 8.72461 625.163 8.86133 625.346 9.03711C625.528 9.22591 625.665 9.45378 625.756 9.7207C625.854 9.98763 625.902 10.2904 625.902 10.6289C625.902 10.9414 625.85 11.2344 625.746 11.5078C625.648 11.7747 625.505 11.9993 625.316 12.1816C625.115 12.39 624.857 12.5527 624.545 12.6699C624.232 12.7806 623.868 12.8359 623.451 12.8359H622.055Z"
            fill="white"
            fill-opacity="0.65"
          />
          <circle cx="588" cy="57" r="9" fill="#3B38E6" />
          <circle
            cx="588"
            cy="57"
            r="12"
            stroke="#3B38E6"
            stroke-opacity="0.4"
            stroke-width="6"
          />
          <path
            d="M96.2012 15.0137V13.0605C96.1947 12.5527 96.1523 12.0547 96.0742 11.5664C96.0026 11.0716 95.8887 10.6029 95.7324 10.1602C95.5436 9.61979 95.293 9.125 94.9805 8.67578C94.6745 8.22656 94.3132 7.84245 93.8965 7.52344C93.5059 7.23047 93.0664 7.0026 92.5781 6.83984C92.0964 6.67057 91.5658 6.58594 90.9863 6.58594C90.4069 6.58594 89.8763 6.67057 89.3945 6.83984C88.9193 7.0026 88.4896 7.23047 88.1055 7.52344C87.7018 7.82943 87.3535 8.19727 87.0605 8.62695C86.7741 9.05664 86.543 9.52865 86.3672 10.043C86.2044 10.4987 86.0807 10.9837 85.9961 11.498C85.9115 12.0059 85.8691 12.5267 85.8691 13.0605V15.0137C85.8691 15.502 85.9115 15.987 85.9961 16.4688C86.0807 16.9505 86.2077 17.4095 86.377 17.8457C86.5592 18.321 86.7936 18.7669 87.0801 19.1836C87.3665 19.5938 87.7018 19.9486 88.0859 20.248C88.4701 20.541 88.903 20.7721 89.3848 20.9414C89.8665 21.1107 90.4004 21.1953 90.9863 21.1953C91.2337 21.1953 91.4714 21.179 91.6992 21.1465C91.9271 21.1139 92.1517 21.0684 92.373 21.0098L95.1172 23.4609L96.6699 22.0547L94.2773 19.9648C94.5833 19.6914 94.8503 19.3789 95.0781 19.0273C95.306 18.6758 95.498 18.3047 95.6543 17.9141C95.8301 17.4714 95.9635 17.0026 96.0547 16.5078C96.1458 16.013 96.1947 15.515 96.2012 15.0137ZM93.8281 13.041V15.0137C93.8281 15.3132 93.8086 15.6191 93.7695 15.9316C93.737 16.2441 93.6849 16.5501 93.6133 16.8496C93.5156 17.1947 93.3887 17.5202 93.2324 17.8262C93.0762 18.1257 92.8809 18.3828 92.6465 18.5977C92.4382 18.7865 92.1973 18.9395 91.9238 19.0566C91.6504 19.1673 91.3379 19.2227 90.9863 19.2227C90.6413 19.2227 90.3353 19.1673 90.0684 19.0566C89.8014 18.946 89.5703 18.793 89.375 18.5977C89.1406 18.3828 88.9453 18.1224 88.7891 17.8164C88.6393 17.5039 88.5221 17.1654 88.4375 16.8008C88.3659 16.5143 88.3138 16.2181 88.2812 15.9121C88.2487 15.6061 88.2324 15.3066 88.2324 15.0137V13.041C88.2324 12.722 88.2454 12.403 88.2715 12.084C88.304 11.765 88.3529 11.4557 88.418 11.1562C88.4961 10.7591 88.61 10.3945 88.7598 10.0625C88.916 9.72396 89.1146 9.4375 89.3555 9.20312C89.5573 9.00781 89.7917 8.85482 90.0586 8.74414C90.3255 8.63346 90.6348 8.57812 90.9863 8.57812C91.3444 8.57812 91.6634 8.63672 91.9434 8.75391C92.2233 8.86458 92.4642 9.01758 92.666 9.21289C92.8809 9.42122 93.0632 9.66862 93.2129 9.95508C93.3691 10.2415 93.4896 10.554 93.5742 10.8926C93.6654 11.2181 93.7305 11.5664 93.7695 11.9375C93.8086 12.3021 93.8281 12.6699 93.8281 13.041ZM106.201 15.9316V6.78125H103.799L97.6562 16.3906L97.7148 17.8262H103.867V21H106.201V17.8262H107.988V15.9316H106.201ZM100.039 15.9316L103.594 10.4141L103.867 9.90625V15.9316H100.039ZM131.602 21V19.1152H124.98L128.145 15.7363C128.561 15.2936 128.945 14.8639 129.297 14.4473C129.655 14.0306 129.964 13.6172 130.225 13.207C130.479 12.7969 130.677 12.3835 130.82 11.9668C130.97 11.5436 131.045 11.1074 131.045 10.6582C131.045 10.0592 130.947 9.51237 130.752 9.01758C130.557 8.51628 130.273 8.08659 129.902 7.72852C129.525 7.37044 129.059 7.09049 128.506 6.88867C127.959 6.68685 127.337 6.58594 126.641 6.58594C125.898 6.58594 125.225 6.70638 124.619 6.94727C124.02 7.18815 123.512 7.51367 123.096 7.92383C122.673 8.33398 122.347 8.81576 122.119 9.36914C121.891 9.91602 121.777 10.4987 121.777 11.1172H124.121C124.121 10.707 124.173 10.3424 124.277 10.0234C124.382 9.69792 124.538 9.42122 124.746 9.19336C124.948 8.97852 125.202 8.8125 125.508 8.69531C125.814 8.57812 126.175 8.51953 126.592 8.51953C126.917 8.51953 127.21 8.57487 127.471 8.68555C127.738 8.79622 127.965 8.94922 128.154 9.14453C128.343 9.33984 128.486 9.57422 128.584 9.84766C128.682 10.1211 128.73 10.4238 128.73 10.7559C128.73 11.0033 128.695 11.2507 128.623 11.498C128.558 11.7389 128.447 11.9993 128.291 12.2793C128.128 12.5592 127.917 12.8685 127.656 13.207C127.396 13.5391 127.074 13.9167 126.689 14.3398L122.061 19.3789V21H131.602ZM143.682 15.5801V12.2109C143.682 11.2995 143.574 10.4954 143.359 9.79883C143.145 9.0957 142.842 8.50326 142.451 8.02148C142.048 7.54622 141.559 7.18815 140.986 6.94727C140.42 6.69987 139.775 6.57617 139.053 6.57617C138.337 6.57617 137.692 6.69987 137.119 6.94727C136.553 7.18815 136.071 7.54622 135.674 8.02148C135.277 8.50326 134.971 9.0957 134.756 9.79883C134.548 10.4954 134.443 11.2995 134.443 12.2109V15.5801C134.443 16.4915 134.548 17.2988 134.756 18.002C134.971 18.6986 135.28 19.2812 135.684 19.75C136.081 20.2318 136.566 20.5964 137.139 20.8438C137.712 21.0846 138.356 21.2051 139.072 21.2051C139.795 21.2051 140.439 21.0846 141.006 20.8438C141.579 20.5964 142.061 20.2318 142.451 19.75C142.848 19.2812 143.151 18.6986 143.359 18.002C143.574 17.2988 143.682 16.4915 143.682 15.5801ZM136.787 14.75C136.787 14.5612 136.787 14.4017 136.787 14.2715C136.787 14.1413 136.787 13.9525 136.787 13.7051V11.791C136.787 11.2051 136.839 10.6973 136.943 10.2676C137.048 9.83138 137.207 9.47656 137.422 9.20312C137.604 8.96224 137.832 8.77995 138.105 8.65625C138.379 8.53255 138.695 8.4707 139.053 8.4707C139.385 8.4707 139.681 8.52279 139.941 8.62695C140.208 8.73112 140.433 8.88737 140.615 9.0957C140.824 9.33008 140.983 9.63281 141.094 10.0039C141.211 10.375 141.283 10.8145 141.309 11.3223L136.787 14.75ZM141.328 15.9707C141.328 16.5697 141.273 17.0905 141.162 17.5332C141.058 17.9759 140.898 18.334 140.684 18.6074C140.495 18.8418 140.267 19.0208 140 19.1445C139.733 19.2617 139.424 19.3203 139.072 19.3203C138.714 19.3203 138.398 19.2585 138.125 19.1348C137.858 19.0111 137.633 18.8255 137.451 18.5781C137.269 18.3503 137.122 18.0638 137.012 17.7188C136.908 17.3737 136.839 16.9766 136.807 16.5273L141.328 13.1191C141.328 13.3079 141.328 13.4902 141.328 13.666C141.328 13.8418 141.328 14.0111 141.328 14.1738V15.9707ZM155.625 21V19.1152H149.004L152.168 15.7363C152.585 15.2936 152.969 14.8639 153.32 14.4473C153.678 14.0306 153.988 13.6172 154.248 13.207C154.502 12.7969 154.701 12.3835 154.844 11.9668C154.993 11.5436 155.068 11.1074 155.068 10.6582C155.068 10.0592 154.971 9.51237 154.775 9.01758C154.58 8.51628 154.297 8.08659 153.926 7.72852C153.548 7.37044 153.083 7.09049 152.529 6.88867C151.982 6.68685 151.361 6.58594 150.664 6.58594C149.922 6.58594 149.248 6.70638 148.643 6.94727C148.044 7.18815 147.536 7.51367 147.119 7.92383C146.696 8.33398 146.37 8.81576 146.143 9.36914C145.915 9.91602 145.801 10.4987 145.801 11.1172H148.145C148.145 10.707 148.197 10.3424 148.301 10.0234C148.405 9.69792 148.561 9.42122 148.77 9.19336C148.971 8.97852 149.225 8.8125 149.531 8.69531C149.837 8.57812 150.199 8.51953 150.615 8.51953C150.941 8.51953 151.234 8.57487 151.494 8.68555C151.761 8.79622 151.989 8.94922 152.178 9.14453C152.367 9.33984 152.51 9.57422 152.607 9.84766C152.705 10.1211 152.754 10.4238 152.754 10.7559C152.754 11.0033 152.718 11.2507 152.646 11.498C152.581 11.7389 152.471 11.9993 152.314 12.2793C152.152 12.5592 151.94 12.8685 151.68 13.207C151.419 13.5391 151.097 13.9167 150.713 14.3398L146.084 19.3789V21H155.625ZM167.637 21V19.1152H161.016L164.18 15.7363C164.596 15.2936 164.98 14.8639 165.332 14.4473C165.69 14.0306 165.999 13.6172 166.26 13.207C166.514 12.7969 166.712 12.3835 166.855 11.9668C167.005 11.5436 167.08 11.1074 167.08 10.6582C167.08 10.0592 166.982 9.51237 166.787 9.01758C166.592 8.51628 166.309 8.08659 165.938 7.72852C165.56 7.37044 165.094 7.09049 164.541 6.88867C163.994 6.68685 163.372 6.58594 162.676 6.58594C161.934 6.58594 161.26 6.70638 160.654 6.94727C160.055 7.18815 159.548 7.51367 159.131 7.92383C158.708 8.33398 158.382 8.81576 158.154 9.36914C157.926 9.91602 157.812 10.4987 157.812 11.1172H160.156C160.156 10.707 160.208 10.3424 160.312 10.0234C160.417 9.69792 160.573 9.42122 160.781 9.19336C160.983 8.97852 161.237 8.8125 161.543 8.69531C161.849 8.57812 162.21 8.51953 162.627 8.51953C162.952 8.51953 163.245 8.57487 163.506 8.68555C163.773 8.79622 164.001 8.94922 164.189 9.14453C164.378 9.33984 164.521 9.57422 164.619 9.84766C164.717 10.1211 164.766 10.4238 164.766 10.7559C164.766 11.0033 164.73 11.2507 164.658 11.498C164.593 11.7389 164.482 11.9993 164.326 12.2793C164.163 12.5592 163.952 12.8685 163.691 13.207C163.431 13.5391 163.109 13.9167 162.725 14.3398L158.096 19.3789V21H167.637Z"
            fill="white"
            fill-opacity="0.65"
          />
          <circle cx="127" cy="57" r="9" fill="#3B38E6" />
          <circle
            cx="127"
            cy="57"
            r="12"
            stroke="#3B38E6"
            stroke-opacity="0.4"
            stroke-width="6"
          />
          <path
            d="M1004.87 17.3379C1004.87 17.6504 1004.8 17.9271 1004.66 18.168C1004.53 18.4089 1004.36 18.6107 1004.13 18.7734C1003.91 18.9427 1003.64 19.0697 1003.32 19.1543C1003.02 19.2389 1002.69 19.2812 1002.33 19.2812C1001.9 19.2812 1001.51 19.2292 1001.16 19.125C1000.8 19.0208 1000.5 18.8613 1000.24 18.6465C999.971 18.4382 999.76 18.1745 999.604 17.8555C999.454 17.5299 999.363 17.1491 999.33 16.7129H996.986C996.993 17.3965 997.13 18.002 997.396 18.5293C997.67 19.0566 998.038 19.5156 998.5 19.9062C999.001 20.3229 999.59 20.6419 1000.27 20.8633C1000.94 21.0781 1001.63 21.1855 1002.33 21.1855C1002.99 21.1855 1003.61 21.1042 1004.2 20.9414C1004.8 20.7721 1005.32 20.5215 1005.77 20.1895C1006.21 19.8704 1006.56 19.4701 1006.82 18.9883C1007.09 18.5065 1007.22 17.9499 1007.22 17.3184C1007.22 16.6348 1007.07 16.0326 1006.76 15.5117C1006.46 14.9844 1006.06 14.5319 1005.56 14.1543C1005.16 13.8548 1004.71 13.6009 1004.23 13.3926C1003.76 13.1777 1003.27 12.9987 1002.77 12.8555C1002.37 12.7383 1001.99 12.6113 1001.62 12.4746C1001.27 12.3379 1000.95 12.1784 1000.67 11.9961C1000.39 11.8138 1000.18 11.6022 1000.01 11.3613C999.851 11.1139 999.766 10.8275 999.76 10.502C999.76 10.196 999.822 9.91927 999.945 9.67188C1000.07 9.42448 1000.24 9.21289 1000.46 9.03711C1000.68 8.86784 1000.94 8.73763 1001.24 8.64648C1001.55 8.54883 1001.88 8.5 1002.24 8.5C1002.65 8.5 1003.01 8.56185 1003.32 8.68555C1003.64 8.80273 1003.91 8.96549 1004.13 9.17383C1004.35 9.38867 1004.52 9.64583 1004.63 9.94531C1004.76 10.2383 1004.83 10.5638 1004.87 10.9219H1007.19C1007.19 10.2773 1007.06 9.69141 1006.8 9.16406C1006.55 8.63021 1006.2 8.17122 1005.76 7.78711C1005.31 7.40951 1004.79 7.11654 1004.19 6.9082C1003.6 6.69336 1002.96 6.58594 1002.27 6.58594C1001.62 6.58594 1001 6.67708 1000.4 6.85938C999.818 7.03516 999.304 7.29232 998.861 7.63086C998.419 7.97591 998.067 8.39258 997.807 8.88086C997.546 9.36263 997.416 9.90625 997.416 10.5117C997.416 11.0716 997.527 11.5762 997.748 12.0254C997.976 12.4681 998.288 12.8652 998.686 13.2168C999.083 13.5618 999.561 13.8743 1000.12 14.1543C1000.69 14.4277 1001.31 14.6589 1001.98 14.8477C1002.41 14.9714 1002.81 15.1113 1003.16 15.2676C1003.52 15.4173 1003.83 15.5866 1004.09 15.7754C1004.33 15.9772 1004.53 16.2051 1004.66 16.459C1004.8 16.7129 1004.87 17.0059 1004.87 17.3379ZM1018.58 21V19.1152H1011.96L1015.12 15.7363C1015.54 15.2936 1015.92 14.8639 1016.27 14.4473C1016.63 14.0306 1016.94 13.6172 1017.2 13.207C1017.46 12.7969 1017.65 12.3835 1017.8 11.9668C1017.95 11.5436 1018.02 11.1074 1018.02 10.6582C1018.02 10.0592 1017.92 9.51237 1017.73 9.01758C1017.53 8.51628 1017.25 8.08659 1016.88 7.72852C1016.5 7.37044 1016.04 7.09049 1015.48 6.88867C1014.94 6.68685 1014.31 6.58594 1013.62 6.58594C1012.88 6.58594 1012.2 6.70638 1011.6 6.94727C1011 7.18815 1010.49 7.51367 1010.07 7.92383C1009.65 8.33398 1009.32 8.81576 1009.1 9.36914C1008.87 9.91602 1008.75 10.4987 1008.75 11.1172H1011.1C1011.1 10.707 1011.15 10.3424 1011.25 10.0234C1011.36 9.69792 1011.51 9.42122 1011.72 9.19336C1011.92 8.97852 1012.18 8.8125 1012.48 8.69531C1012.79 8.57812 1013.15 8.51953 1013.57 8.51953C1013.89 8.51953 1014.19 8.57487 1014.45 8.68555C1014.71 8.79622 1014.94 8.94922 1015.13 9.14453C1015.32 9.33984 1015.46 9.57422 1015.56 9.84766C1015.66 10.1211 1015.71 10.4238 1015.71 10.7559C1015.71 11.0033 1015.67 11.2507 1015.6 11.498C1015.53 11.7389 1015.42 11.9993 1015.27 12.2793C1015.1 12.5592 1014.89 12.8685 1014.63 13.207C1014.37 13.5391 1014.05 13.9167 1013.67 14.3398L1009.04 19.3789V21H1018.58ZM1042.6 21V19.1152H1035.98L1039.14 15.7363C1039.56 15.2936 1039.95 14.8639 1040.3 14.4473C1040.65 14.0306 1040.96 13.6172 1041.22 13.207C1041.48 12.7969 1041.68 12.3835 1041.82 11.9668C1041.97 11.5436 1042.04 11.1074 1042.04 10.6582C1042.04 10.0592 1041.95 9.51237 1041.75 9.01758C1041.56 8.51628 1041.27 8.08659 1040.9 7.72852C1040.52 7.37044 1040.06 7.09049 1039.51 6.88867C1038.96 6.68685 1038.34 6.58594 1037.64 6.58594C1036.9 6.58594 1036.22 6.70638 1035.62 6.94727C1035.02 7.18815 1034.51 7.51367 1034.1 7.92383C1033.67 8.33398 1033.35 8.81576 1033.12 9.36914C1032.89 9.91602 1032.78 10.4987 1032.78 11.1172H1035.12C1035.12 10.707 1035.17 10.3424 1035.28 10.0234C1035.38 9.69792 1035.54 9.42122 1035.75 9.19336C1035.95 8.97852 1036.2 8.8125 1036.51 8.69531C1036.81 8.57812 1037.18 8.51953 1037.59 8.51953C1037.92 8.51953 1038.21 8.57487 1038.47 8.68555C1038.74 8.79622 1038.97 8.94922 1039.15 9.14453C1039.34 9.33984 1039.49 9.57422 1039.58 9.84766C1039.68 10.1211 1039.73 10.4238 1039.73 10.7559C1039.73 11.0033 1039.69 11.2507 1039.62 11.498C1039.56 11.7389 1039.45 11.9993 1039.29 12.2793C1039.13 12.5592 1038.92 12.8685 1038.66 13.207C1038.4 13.5391 1038.07 13.9167 1037.69 14.3398L1033.06 19.3789V21H1042.6ZM1054.68 15.5801V12.2109C1054.68 11.2995 1054.57 10.4954 1054.36 9.79883C1054.14 9.0957 1053.84 8.50326 1053.45 8.02148C1053.05 7.54622 1052.56 7.18815 1051.99 6.94727C1051.42 6.69987 1050.78 6.57617 1050.05 6.57617C1049.34 6.57617 1048.69 6.69987 1048.12 6.94727C1047.55 7.18815 1047.07 7.54622 1046.67 8.02148C1046.28 8.50326 1045.97 9.0957 1045.76 9.79883C1045.55 10.4954 1045.44 11.2995 1045.44 12.2109V15.5801C1045.44 16.4915 1045.55 17.2988 1045.76 18.002C1045.97 18.6986 1046.28 19.2812 1046.68 19.75C1047.08 20.2318 1047.57 20.5964 1048.14 20.8438C1048.71 21.0846 1049.36 21.2051 1050.07 21.2051C1050.79 21.2051 1051.44 21.0846 1052.01 20.8438C1052.58 20.5964 1053.06 20.2318 1053.45 19.75C1053.85 19.2812 1054.15 18.6986 1054.36 18.002C1054.57 17.2988 1054.68 16.4915 1054.68 15.5801ZM1047.79 14.75C1047.79 14.5612 1047.79 14.4017 1047.79 14.2715C1047.79 14.1413 1047.79 13.9525 1047.79 13.7051V11.791C1047.79 11.2051 1047.84 10.6973 1047.94 10.2676C1048.05 9.83138 1048.21 9.47656 1048.42 9.20312C1048.6 8.96224 1048.83 8.77995 1049.11 8.65625C1049.38 8.53255 1049.69 8.4707 1050.05 8.4707C1050.38 8.4707 1050.68 8.52279 1050.94 8.62695C1051.21 8.73112 1051.43 8.88737 1051.62 9.0957C1051.82 9.33008 1051.98 9.63281 1052.09 10.0039C1052.21 10.375 1052.28 10.8145 1052.31 11.3223L1047.79 14.75ZM1052.33 15.9707C1052.33 16.5697 1052.27 17.0905 1052.16 17.5332C1052.06 17.9759 1051.9 18.334 1051.68 18.6074C1051.49 18.8418 1051.27 19.0208 1051 19.1445C1050.73 19.2617 1050.42 19.3203 1050.07 19.3203C1049.71 19.3203 1049.4 19.2585 1049.12 19.1348C1048.86 19.0111 1048.63 18.8255 1048.45 18.5781C1048.27 18.3503 1048.12 18.0638 1048.01 17.7188C1047.91 17.3737 1047.84 16.9766 1047.81 16.5273L1052.33 13.1191C1052.33 13.3079 1052.33 13.4902 1052.33 13.666C1052.33 13.8418 1052.33 14.0111 1052.33 14.1738V15.9707ZM1066.62 21V19.1152H1060L1063.17 15.7363C1063.58 15.2936 1063.97 14.8639 1064.32 14.4473C1064.68 14.0306 1064.99 13.6172 1065.25 13.207C1065.5 12.7969 1065.7 12.3835 1065.84 11.9668C1065.99 11.5436 1066.07 11.1074 1066.07 10.6582C1066.07 10.0592 1065.97 9.51237 1065.78 9.01758C1065.58 8.51628 1065.3 8.08659 1064.93 7.72852C1064.55 7.37044 1064.08 7.09049 1063.53 6.88867C1062.98 6.68685 1062.36 6.58594 1061.66 6.58594C1060.92 6.58594 1060.25 6.70638 1059.64 6.94727C1059.04 7.18815 1058.54 7.51367 1058.12 7.92383C1057.7 8.33398 1057.37 8.81576 1057.14 9.36914C1056.91 9.91602 1056.8 10.4987 1056.8 11.1172H1059.14C1059.14 10.707 1059.2 10.3424 1059.3 10.0234C1059.4 9.69792 1059.56 9.42122 1059.77 9.19336C1059.97 8.97852 1060.23 8.8125 1060.53 8.69531C1060.84 8.57812 1061.2 8.51953 1061.62 8.51953C1061.94 8.51953 1062.23 8.57487 1062.49 8.68555C1062.76 8.79622 1062.99 8.94922 1063.18 9.14453C1063.37 9.33984 1063.51 9.57422 1063.61 9.84766C1063.71 10.1211 1063.75 10.4238 1063.75 10.7559C1063.75 11.0033 1063.72 11.2507 1063.65 11.498C1063.58 11.7389 1063.47 11.9993 1063.31 12.2793C1063.15 12.5592 1062.94 12.8685 1062.68 13.207C1062.42 13.5391 1062.1 13.9167 1061.71 14.3398L1057.08 19.3789V21H1066.62ZM1072.05 12.8359V14.6719H1073.45C1073.85 14.6719 1074.22 14.7207 1074.54 14.8184C1074.88 14.9095 1075.16 15.0495 1075.39 15.2383C1075.63 15.4336 1075.81 15.6777 1075.93 15.9707C1076.06 16.2637 1076.12 16.6152 1076.12 17.0254C1076.12 17.39 1076.06 17.7155 1075.95 18.002C1075.85 18.2819 1075.69 18.5163 1075.49 18.7051C1075.28 18.9069 1075.03 19.0599 1074.72 19.1641C1074.42 19.2617 1074.08 19.3105 1073.71 19.3105C1073.35 19.3105 1073.03 19.2585 1072.74 19.1543C1072.45 19.0501 1072.2 18.9036 1072 18.7148C1071.78 18.5326 1071.62 18.3112 1071.5 18.0508C1071.39 17.7839 1071.33 17.4941 1071.33 17.1816H1069C1069 17.8457 1069.12 18.4284 1069.38 18.9297C1069.64 19.4245 1069.98 19.8411 1070.41 20.1797C1070.84 20.5182 1071.34 20.7721 1071.91 20.9414C1072.47 21.1107 1073.06 21.1953 1073.68 21.1953C1074.35 21.1953 1074.98 21.1042 1075.56 20.9219C1076.15 20.7331 1076.65 20.4596 1077.08 20.1016C1077.51 19.75 1077.84 19.3171 1078.08 18.8027C1078.33 18.2819 1078.45 17.6895 1078.45 17.0254C1078.45 16.6673 1078.41 16.3223 1078.32 15.9902C1078.24 15.6517 1078.1 15.3359 1077.91 15.043C1077.73 14.7565 1077.48 14.4993 1077.18 14.2715C1076.89 14.0371 1076.53 13.8483 1076.11 13.7051C1076.47 13.5423 1076.78 13.3438 1077.04 13.1094C1077.31 12.875 1077.53 12.6243 1077.71 12.3574C1077.88 12.084 1078.01 11.8008 1078.1 11.5078C1078.19 11.2148 1078.24 10.9219 1078.24 10.6289C1078.24 9.96484 1078.13 9.38216 1077.9 8.88086C1077.68 8.37956 1077.37 7.95638 1076.97 7.61133C1076.57 7.27279 1076.09 7.01888 1075.52 6.84961C1074.96 6.67383 1074.35 6.58594 1073.68 6.58594C1073.02 6.58594 1072.41 6.68359 1071.86 6.87891C1071.31 7.07422 1070.84 7.3444 1070.43 7.68945C1070.03 8.04102 1069.71 8.45443 1069.49 8.92969C1069.26 9.40495 1069.14 9.92578 1069.14 10.4922H1071.48C1071.48 10.1862 1071.53 9.90951 1071.64 9.66211C1071.76 9.41471 1071.92 9.20312 1072.12 9.02734C1072.32 8.85156 1072.55 8.7181 1072.82 8.62695C1073.09 8.5293 1073.39 8.48047 1073.71 8.48047C1074.06 8.48047 1074.38 8.5293 1074.65 8.62695C1074.93 8.72461 1075.16 8.86133 1075.35 9.03711C1075.53 9.22591 1075.66 9.45378 1075.76 9.7207C1075.85 9.98763 1075.9 10.2904 1075.9 10.6289C1075.9 10.9414 1075.85 11.2344 1075.75 11.5078C1075.65 11.7747 1075.51 11.9993 1075.32 12.1816C1075.11 12.39 1074.86 12.5527 1074.54 12.6699C1074.23 12.7806 1073.87 12.8359 1073.45 12.8359H1072.05Z"
            fill="white"
            fill-opacity="0.65"
          />
          <circle cx="1038" cy="57" r="9" fill="#3B38E6" />
          <circle
            cx="1038"
            cy="57"
            r="12"
            stroke="#3B38E6"
            stroke-opacity="0.4"
            stroke-width="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_65_2"
              x1="1"
              y1="60"
              x2="989.243"
              y2="-370.677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3B38E6" stop-opacity="0" />
              <stop offset="0.504832" stop-color="#3B38E6" />
              <stop offset="1" stop-color="#3B38E6" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.timelineContent}>
        <div className={`${styles.contentWrapper} ${styles.first}`}>
          <div className={styles.contentItem}>• SQL supported test network</div>
          {/* <div className={styles.contentItem}>• Advanced SQL</div> */}
          <div className={styles.contentItem}>• Gas consumption mechanism</div>
        </div>

        <div className={`${styles.contentWrapper} ${styles.second}`}>
          <div className={styles.contentItem}>• ZK based prove of sql </div>
          <div className={styles.contentItem}>• Low latency sql experience</div>
        </div>

        <div className={`${styles.contentWrapper} ${styles.third}`}>
          <div className={styles.contentItem}>• Storage chain sharding</div>
          <div className={styles.contentItem}>• Compute chain test net</div>
        </div>
      </div>
    </div>
  );
}
