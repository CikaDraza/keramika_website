import React, { useEffect, useRef } from 'react';

export default function Stone(props) {
  const { height, width, pathFill } = props;
  const stoneRef = useRef(null);

  useEffect(() => {
    const arr = [];
    arr.push(...stoneRef.current.children);
    arr.forEach(element => element.style.stroke = pathFill);
    arr.forEach(element => element.style.strokeWidth = '2');
    arr.forEach(element => element.style.fill = 'none');
    return () => {
      console.info('keramicarske usluge Lale');
    }
  }, [pathFill]);

  return (
    <svg ref={stoneRef} width={width} height={height} viewBox="0 0 67 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.79755 0.180908H10.7239H18.184L19 2.20722V11.1809V17.8388L18.7669 20.1546L18.184 22.1809H10.7239H2.33129L0.932515 20.1546L0 13.4967V8.57565L0.932515 3.07564L2.79755 0.180908Z" />
      <path d="M63.1981 20.5815L56.5738 20.5899L50.3392 20.5979L49.6556 18.7499L49.6486 10.5625L49.6433 4.48797L49.8364 2.37484L50.3218 0.525446L56.5565 0.517528L63.5705 0.508621L64.7411 2.35591L65.5257 8.42946L65.5295 12.9193L64.7545 17.9384L63.1981 20.5815Z" />
      <path d="M64.4968 56.0306L61.6489 56.0342L58.9685 56.0376L58.6735 53.8725L58.6652 44.2826L58.6591 37.1674L58.7407 34.6925L58.9483 32.5268L61.6286 32.5234L64.6441 32.5196L65.1485 34.6844L65.4897 41.7991L65.4942 47.0581L65.1642 52.9362L64.4968 56.0306Z" />
      <path d="M8.21955 44.0274L4.84341 44.0317L1.66587 44.0357L1.31678 42.2454L1.30994 34.3147L1.30486 28.4307L1.4024 26.3839L1.6491 24.5928L4.84341 23.5472L8.40138 24.5842L8.99872 26.3743L9.40098 32.2578L9.40473 36.6069L9.01173 41.4681L8.21955 44.0274Z" />
      <path d="M2.47082 66.735L2.3743 62.6398L2.28346 58.7856L3.7487 58.3128L10.2816 58.0861L15.1286 57.9179L16.8174 57.9798L18.2997 58.2298L19.249 62.0756L18.4927 66.42L17.0346 67.1939L12.1989 67.8439L8.61633 67.9682L4.60092 67.6254L2.47082 66.735Z" />
      <path d="M49.6744 66.5326L49.5779 62.4374L49.4871 58.5832L50.9523 58.1104L57.4852 57.8837L62.3323 57.7155L64.021 57.7774L65.5033 58.0274L66.4526 61.8732L65.6963 66.2176L64.2382 66.9915L59.4025 67.6415L55.8199 67.7658L51.8045 67.423L49.6744 66.5326Z" />
      <path d="M30.6118 8.41076L30.6118 4.31395L30.6118 0.458138L32.0876 0.0364084L38.6232 0.0364085L43.4722 0.0364086L45.1588 0.156903L46.6346 0.458139L47.4929 4.33539L46.6346 8.65175L45.1588 9.37471L40.3098 9.85669L36.7258 9.85669L32.7201 9.37471L30.6118 8.41076Z" />
      <path d="M64.4827 31.5659L61.6348 31.5695L58.9544 31.5729L58.6605 30.7868L58.6575 27.3037L58.6553 24.7195L58.7383 23.8205L58.947 23.0337L61.6274 23.0303L64.6428 23.0265L65.1461 23.8123L65.4833 26.3962L65.485 28.3062L65.1518 30.4415L64.4827 31.5659Z"/>
      <path d="M56.6098 55.1285L53.1248 55.1329L49.8449 55.1371L49.4854 54.3235L49.4823 50.7186L49.48 48.044L49.5817 47.1136L49.8372 46.2992L53.1172 46.2951L56.8072 46.2904L57.4229 47.1036L57.8352 49.7777L57.8369 51.7546L57.4288 53.9646L56.6098 55.1285Z" />
      <path d="M36.7236 44.1421L33.2386 44.1465L29.9586 44.1507L29.5992 43.3371L29.5961 39.7322L29.5938 37.0575L29.6955 36.1271L29.951 35.3128L33.231 35.3086L36.921 35.3039L37.5367 36.1172L37.949 38.7913L37.9507 40.7682L37.5426 42.9781L36.7236 44.1421Z" />
      <path d="M27.291 66.7248L23.806 66.7293L20.526 66.7334L20.1666 65.9199L20.1634 62.3149L20.1611 59.6403L20.2628 58.7099L20.5184 57.8955L23.7984 57.8914L27.4884 57.8867L28.1041 58.6999L28.5164 61.374L28.5181 63.3509L28.11 65.5609L27.291 66.7248Z" />
      <path d="M8.68065 55.8889L5.19565 55.8933L1.91566 55.8975L1.16688 54.3192L1.16688 51.535L1.16688 49.6789L1.16688 48.2868L1.90803 47.0596L5.18803 47.0554L8.87802 47.0507L9.49373 47.864L9.90603 50.5381L9.90774 52.515L9.49964 54.725L8.68065 55.8889Z" />
      <path d="M18.2471 33.3147L14.7621 33.3191L11.4821 33.3233L10.7333 31.7451L10.7333 28.9609L10.7333 27.1048L10.7333 25.7127L11.4744 24.4854L14.7544 24.4813L18.4444 24.4766L19.0601 25.2898L19.4724 27.9639L19.4741 29.9408L19.066 32.1508L18.2471 33.3147Z" />
      <path d="M47.0547 20.9406L43.5697 20.9451L40.2897 20.9492L39.5409 19.371L39.5409 16.5868L39.5409 14.7307L39.5409 13.3386L40.2821 12.1113L43.5621 12.1072L47.252 12.1025L47.8677 12.9157L48.2801 15.5898L48.2818 17.5667L47.8737 19.7767L47.0547 20.9406Z" />
      <path d="M27.3985 9.6565L24.3925 9.66032L21.5634 9.66391L21.2532 8.77501L21.2498 4.83673L21.2473 1.91478L21.3348 0.898335L21.5551 0.00876473L24.3842 0.00517192L27.567 0.00113002L28.0983 0.889746L28.4544 3.81125L28.4563 5.97095L28.1047 8.38519L27.3985 9.6565Z" />
      <path d="M54.8011 43.8423L47.0921 43.8521L39.8365 43.8613L39.0412 41.9363L39.0339 33.4071L39.0284 27.079L39.2532 24.8776L39.8184 22.9509L47.074 22.9417L55.2366 22.9313L56.5987 24.8556L57.5111 31.1825L57.5151 35.8599L56.6127 41.0886L54.8011 43.8423Z" />
      <path d="M45.6234 67.3531L37.9143 67.3629L30.6587 67.3721L29.8635 65.4471L29.4999 57.1809L29.4999 52.6809L29.4999 49.1809L30.9999 46.6809L37.8963 46.4525L46.0588 46.4421L47.4209 48.3664L48.3333 54.6934L48.3374 59.3707L47.4349 64.5994L45.6234 67.3531Z" />
      <path d="M25.725 55.8391L19.0342 55.8476L12.737 55.8556L12.0466 53.8975L10.4824 45.2616L10.4817 39.4404L10.4813 36.5233L12.7187 34.5864L19.0159 34.5784L26.1002 34.5694L27.2826 36.5269L28.0753 42.9627L28.0794 47.7202L27.2969 53.0385L25.725 55.8391Z" />
      <path d="M35.2557 31.4848L28.9923 31.4928L23.0973 31.5002L20.9861 28.9373L20.9869 21.8639L20.9864 16.5689L20.9861 13.9155L23.0806 12.1536L28.9756 12.1461L35.6074 12.1377L36.7143 13.9182L37.4562 19.7722L37.4599 24.0997L36.7272 28.9373L35.2557 31.4848Z" />
    </svg>

  )
}
