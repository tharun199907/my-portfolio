
import React from 'react';
import type { Project, Skill, NavLink } from './types';

// SVG Icons as React Components
// Icons sized at 16x16 for skills, 24x24 for contact/social links.

export const MenuIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

export const XMarkIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
);

export const BriefcaseIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zM1.5 4h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5z"/>
  </svg>
);

export const CodeBracketIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M6.026 3.037a.5.5 0 0 1 .52.038L9.503 5.5h.994L7.54 2.462a.5.5 0 0 1 .44-.894h4A.5.5 0 0 1 12.5 2v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.44-.894L10.497 10.5h-.994L6.547 12.962a.5.5 0 0 1-.52.038L2.038 9.503v.994L5.075 13.54a.5.5 0 0 1 .088.44L4.5 15.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .894-.44L3.503 10.5h.994l2.962-2.953a.5.5 0 0 1 0-.708L4.503 3.832h-.994L6.462.875a.5.5 0 0 1-.088-.44L7.5.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.894.44L8.497 5.5H7.503L4.547 2.547a.5.5 0 0 1-.02-.52zM4.503 6.5l-2.466 2.466a.5.5 0 0 0 0 .707l2.466 2.467h.994L3.038 9.707a.5.5 0 0 0-.707 0L.195 9.134a.5.5 0 0 0 0-.707L2.332 6.5h2.17zm7 0l2.466 2.466a.5.5 0 0 1 0 .707l-2.466 2.467h-.994l2.419-2.419a.5.5 0 0 1 .707 0l1.134.572a.5.5 0 0 1 0 .707L13.668 9.5h-2.17z"/>
  </svg>
);

export const PaintBrushIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.12 3.12 0 0 0-.145.78c-.013.23-.028.412-.028.583 0 .145.03.286.086.405-.145.015-.315.008-.475-.022a2.12 2.12 0 0 0-.253-.022l.006-.007a.707.707 0 0 1-.004-.443 1.17 1.17 0 0 1 .199-.416.79.79 0 0 1 .416-.252l.19-.07c.09-.03.17-.052.22-.072.06-.027.09-.06.1-.09.08-.22.25-.37.47-.44.19-.06.4-.06.6-.02l.18.04c.15.03.27.08.35.14l.09.07a.42.42 0 0 0 .15.04.5.5 0 0 0 .42-.25z"/>
  </svg>
);

export const EyeIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
  </svg>
);



export const DevicePhoneMobileIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
);

export const GithubSquareIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

export const LinkedInSquareIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
 <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.776 13.019H3.561V9h3.552v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export const MailIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

// New Skill Icons (16x16)
export const JavaScriptIcon: React.FC<{className?: string}> = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className} viewBox="0 0 448 512">
    <path d="M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
  </svg>
);

export const ReactIcon: React.FC<{className?: string}> = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={className} viewBox="0 0 640 640">
    <path d="M482.2 241.2C476.8 239.4 471.4 237.7 466 236.1C466.9 232.4 467.7 228.7 468.5 225C480.8 165.4 472.7 117.5 445.4 101.7C419.1 86.6 376.2 102.3 332.8 140.1C328.5 143.8 324.3 147.7 320.3 151.6C317.6 149 314.8 146.4 312 143.9C266.5 103.5 220.9 86.5 193.6 102.4C167.4 117.6 159.6 162.7 170.6 219.1C171.7 224.7 172.9 230.2 174.3 235.8C167.9 237.6 161.6 239.6 155.7 241.7C102.3 260.2 64 289.4 64 319.6C64 350.8 104.8 382.1 160.3 401.1C164.8 402.6 169.3 404.1 173.9 405.4C172.4 411.4 171.1 417.3 169.9 423.4C159.4 478.9 167.6 522.9 193.8 538C220.8 553.6 266.2 537.6 310.4 498.9C313.9 495.8 317.4 492.6 320.9 489.2C325.3 493.5 329.9 497.6 334.5 501.6C377.3 538.4 419.6 553.3 445.7 538.2C472.7 522.6 481.5 475.3 470.1 417.7C469.2 413.3 468.2 408.8 467.1 404.2C470.3 403.3 473.4 402.3 476.5 401.3C534.2 382.2 576 351.3 576 319.6C576 289.3 536.6 259.9 482.2 241.2zM346.9 156.3C384.1 123.9 418.8 111.2 434.6 120.3C451.5 130 458 169.2 447.4 220.7C446.7 224.1 446 227.4 445.1 230.7C422.9 225.7 400.4 222.1 377.8 220.1C364.8 201.5 350.6 183.7 335.2 167C339.1 163.3 342.9 159.8 346.9 156.3zM231.2 371.5C236.3 380.2 241.5 388.9 247 397.4C231.4 395.7 215.9 393.2 200.6 389.9C205 375.5 210.5 360.6 216.9 345.4C221.5 354.2 226.2 362.9 231.2 371.5zM200.9 251.2C215.3 248 230.6 245.4 246.5 243.4C241.2 251.7 236 260.2 231.1 268.8C226.2 277.3 221.4 286 216.9 294.8C210.6 279.9 205.3 265.3 200.9 251.2zM228.3 320.1C234.9 306.3 242.1 292.8 249.7 279.5C257.3 266.2 265.5 253.3 274.1 240.6C289.1 239.5 304.4 238.9 320 238.9C335.6 238.9 351 239.5 365.9 240.6C374.4 253.2 382.5 266.1 390.2 279.3C397.9 292.5 405.1 306 411.9 319.7C405.2 333.5 398 347.1 390.3 360.5C382.7 373.8 374.6 386.7 366.1 399.5C351.2 400.6 335.7 401.1 320 401.1C304.3 401.1 289.1 400.6 274.4 399.7C265.7 387 257.5 374 249.8 360.7C242.1 347.4 235 333.9 228.3 320.1zM408.9 371.3C414 362.5 418.8 353.6 423.5 344.6C429.9 359.1 435.5 373.8 440.4 388.9C424.9 392.4 409.2 395.1 393.4 396.9C398.8 388.5 403.9 379.9 408.9 371.3zM423.3 294.8C418.6 286 413.8 277.2 408.8 268.6C403.9 260.1 398.8 251.7 393.5 243.4C409.6 245.4 425 248.1 439.4 251.4C434.8 266.2 429.4 280.6 423.3 294.8zM320.2 182.3C330.7 193.7 340.6 205.7 349.8 218.1C330 217.2 310.1 217.2 290.3 218.1C300.1 205.2 310.2 193.2 320.2 182.3zM204.2 121C221 111.2 258.3 125.2 297.6 160C300.1 162.2 302.6 164.6 305.2 167C289.7 183.7 275.4 201.5 262.3 220.1C239.7 222.1 217.3 225.6 195.1 230.5C193.8 225.4 192.7 220.2 191.6 215C182.2 166.6 188.4 130.1 204.2 121zM179.7 384.6C175.5 383.4 171.4 382.1 167.3 380.7C146 374 121.8 363.4 104.3 349.5C94.2 342.5 87.4 331.7 85.5 319.6C85.5 301.3 117.1 277.9 162.7 262C168.4 260 174.2 258.2 180 256.5C186.8 278.2 195 299.5 204.5 320.1C194.9 341 186.6 362.6 179.7 384.6zM296.3 482.6C279.8 497.7 260.7 509.7 239.9 517.9C228.8 523.2 216 523.7 204.6 519.2C188.7 510 182.1 474.7 191.1 427.2C192.2 421.6 193.4 416 194.8 410.5C217.2 415.3 239.8 418.6 262.7 420.3C275.9 439 290.4 456.9 305.9 473.7C302.7 476.8 299.5 479.8 296.3 482.6zM320.8 458.3C310.6 447.3 300.4 435.1 290.5 422C300.1 422.4 310 422.6 320 422.6C330.3 422.6 340.4 422.4 350.4 421.9C341.2 434.6 331.3 446.7 320.8 458.3zM451.5 488.3C450.6 500.5 444.6 511.9 435 519.6C419.1 528.8 385.2 516.8 348.6 485.4C344.4 481.8 340.2 477.9 335.9 473.9C351.2 457 365.3 439.1 378.1 420.3C401 418.4 423.8 414.9 446.3 409.8C447.3 413.9 448.2 418 449 422C453.9 443.6 454.7 466.1 451.5 488.3zM469.7 380.8C466.9 381.7 464.1 382.6 461.2 383.4C454.2 361.6 445.6 340.3 435.7 319.6C445.3 299.2 453.4 278.2 460.2 256.7C465.4 258.2 470.4 259.8 475.2 261.4C521.8 277.4 554.5 301.2 554.5 319.4C554.5 339 519.6 364.3 469.7 380.8zM320 365.8C345.3 365.8 365.8 345.3 365.8 320C365.8 294.7 345.3 274.2 320 274.2C294.7 274.2 274.2 294.7 274.2 320C274.2 345.3 294.7 365.8 320 365.8z"/>
  </svg>
);

export const NodeJSIcon: React.FC<{className?: string}> = ({ className = "" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={className} viewBox="0 0 640 640">
  <path d="M320.5 572C313.8 572 307 570.2 301.1 566.8L239.4 530.3C230.2 525.1 234.7 523.3 237.7 522.3C250 518 252.5 517.1 265.6 509.6C267 508.8 268.8 509.1 270.2 510L317.6 538.1C319.3 539.1 321.7 539.1 323.3 538.1L508 431.5C509.7 430.5 510.8 428.5 510.8 426.5L510.8 213.3C510.8 211.2 509.7 209.3 507.9 208.2L323.3 101.7C321.6 100.7 319.3 100.7 317.6 101.7L133.1 208.3C131.3 209.3 130.2 211.3 130.2 213.4L130.2 426.5C130.2 428.5 131.3 430.5 133.1 431.4L183.7 460.6C211.2 474.3 228 458.2 228 441.9L228 231.5C228 228.5 230.4 226.2 233.4 226.2L256.8 226.2C259.7 226.2 262.2 228.5 262.2 231.5L262.2 442C262.2 478.6 242.2 499.6 207.5 499.6C196.8 499.6 188.4 499.6 165 488L116.6 460.1C104.6 453.2 97.2 440.3 97.2 426.4L97.2 213.3C97.2 199.5 104.6 186.5 116.6 179.6L301.1 73C312.8 66.4 328.3 66.4 339.9 73L524.6 179.7C536.6 186.6 544 199.5 544 213.4L544 426.5C544 440.3 536.6 453.2 524.6 460.2L339.9 566.8C334 570.2 327.3 572 320.5 572zM469.6 361.9C469.6 322 442.6 311.4 385.9 303.9C328.5 296.3 322.7 292.4 322.7 279C322.7 267.9 327.6 253.1 370.1 253.1C408 253.1 422 261.3 427.8 286.9C428.3 289.3 430.5 291.1 433 291.1L457 291.1C458.5 291.1 459.9 290.5 460.9 289.4C461.9 288.3 462.4 286.8 462.3 285.3C458.6 241.2 429.3 220.7 370.1 220.7C317.4 220.7 286 242.9 286 280.2C286 320.6 317.3 331.8 367.8 336.8C428.3 342.7 433 351.6 433 363.5C433 384.1 416.4 392.9 377.5 392.9C328.6 392.9 317.9 380.6 314.3 356.3C313.9 353.7 311.7 351.8 309 351.8L285.1 351.8C282.1 351.8 279.8 354.2 279.8 357.1C279.8 388.2 296.7 425.3 377.6 425.3C436 425.2 469.6 402.1 469.6 361.9z"/>
 </svg>
);

export const PythonIcon: React.FC<{className?: string}> = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className} viewBox="0 0 448 512">
    <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2l-40.1 0 0 47.4c0 36.8-31.2 67.8-66.8 67.8l-106.8 0c-29.2 0-53.4 25-53.4 54.3l0 101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3l0-40.7-106.7 0 0-13.6 160.2 0c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 444.7a20.4 20.4 0 1 1 0-40.7 20.4 20.4 0 1 1 0 40.7zM167.8 248.1l106.8 0c29.7 0 53.4-24.5 53.4-54.3l0-101.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6l0 40.7 106.9 0 0 13.6-147 0c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2l36.7 0 0-48.8c0-35.3 30.5-66.4 66.8-66.4zM161.2 64.7a20.4 20.4 0 1 1 0 40.8 20.4 20.4 0 1 1 0-40.8z"/>
  </svg>
);

export const DatabaseIcon: React.FC<{className?: string}> = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className} viewBox="0 0 448 512">
    <path d="M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"/>
  </svg>
);

export const HTMLIcon: React.FC<{className?: string}> = ({ className = "bi" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className}  viewBox="0 0 384 512">
    <path d="M0 32L34.9 427.8 191.5 480 349.1 427.8 384 32 0 32zM308.2 159.9l-183.8 0 4.1 49.4 175.6 0-13.6 148.4-97.9 27 0 .3-1.1 0-98.7-27.3-6-75.8 47.7 0 3.5 38.1 53.5 14.5 53.7-14.5 6-62.2-166.9 0-12.8-145.6 241.1 0-4.4 47.7z"/>
  </svg>
);

export const RestApiIcon: React.FC<{className?: string}> = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M4.146 1.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L5.793 3.5 4.146 1.854a.5.5 0 0 1 0-.708zm7.708 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.207 3.5l1.647-1.646a.5.5 0 0 0 0-.708zM1.5 6.5A.5.5 0 0 1 2 6h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zm13 3a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5zM4.146 11.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L5.793 13.5l-1.647-1.646a.5.5 0 0 1 0-.708zm7.708 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.207 13.5l1.647-1.646a.5.5 0 0 0 0-.708z"/>
  </svg>
);

export const AIIcon: React.FC<{className?: string}> = ({ className = "" }) => (
<svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className={className} viewBox="0 0 640 640">
<path d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z"/>
</svg>
);

export const USER_NAME = "Tharun Reddy";
export const USER_PROFESSION = "MERN Full-Stack Developer";
export const USER_TAGLINE = "Crafting digital experiences that are intuitive, engaging, and impactful.";
export const USER_ABOUT_ME = [
  "Hello! I'm a passionate and results-driven developer with a knack for creating elegant solutions to complex problems. With a strong foundation in modern web technologies, I specialize in building responsive and user-friendly applications.",
  "My journey in tech began with a fascination for how software can transform ideas into reality. Since then, I've honed my skills in both frontend and backend development, always striving to learn and adapt to the ever-evolving landscape of technology.",
  "When I'm not coding, I enjoy exploring new creative pursuits, contributing to open-source projects, and staying active in the tech community."
];
export const USER_EMAIL = "tharunreddynareddy1999@gmail.com";
export const USER_LINKEDIN_URL = "https://www.linkedin.com/in/tharunnareddy/";
export const USER_GITHUB_URL = "https://github.com/tharun199907";


export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [

  {
    id: 'project1',
    title: 'Prime Video',
    description: 'The Prime Video App displays Action and Comedy movie lists using React Slick for smooth carousel functionality. Users can browse movie thumbnails and watch trailers in a popup modal using the React Player component. The app highlights component-based architecture, third-party integration, and responsive interaction in a clean UI.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1750873341/Screenshot_2025-06-25_231204_cj97as.png',
    technologies: ['React', 'Node.js'],
    repoLink: 'https://github.com/tharun199907/primevideo',
  },

  {
    id: 'project2',
    title: 'Nxt Watch',
    description: 'The Nxt Watch App is a fully functional video streaming platform with authentication, dynamic routing, API integration, dark/light theme switching, and interactive video details. It features categorized video pages (Home, Trending, Gaming, Saved), a protected route system, and responsive UI with complete error handling. The project highlights advanced React concepts in a real-world YouTube-like experience.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1760695828/Screenshot_2025-10-17_153948_eq5dbx.png',
    technologies: ['React', 'Node.js'],
    repoLink: 'https://github.com/tharun199907/nxtwatch',
  },
  {
    id: 'project3',
    title: 'Nxt Trendz app',
    description: 'A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel for managing inventory.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1760696005/Screenshot_2025-10-17_154239_vllsnw.png',
    technologies: ['React', 'Node.js', 'Express', 'CSS'],
    repoLink: 'https://github.com/tharun199907/tutorial1',
  },

  {
    id: 'project4',
    title: 'Restaurant  App',
    description: 'Users can explore a variety of dishes sorted under different menu tabs, with the ability to adjust item quantities. This app was enhanced by integrating new features into the existing functionality.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1750851926/Screenshot_2025-06-25_171446_xnadma.png',
    technologies: ['React', 'Bootstrap'],
    repoLink: 'https://github.com/tharun199907/restaurantapp',
  },
  {
    id: 'project5',
    title: 'Jobby App',
    description: 'Designed to manage job listings, this app supports user authentication, dynamic navigation, and robust error handling, including data fetch failures and route redirection based on login status.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1760695497/Screenshot_2025-10-17_153347_c4ap1u.png',
    technologies: ['React',"CSS"],
    repoLink: 'https://github.com/tharun199907/jobbyapp',
  },
    {
    id: 'project6',
    title: 'IPL Dashboard',
    description: 'The IPL Dashboard app displays a list of IPL teams, allowing users to view each team’s latest and recent match details. This project involved enhancing the existing codebase by adding new functionalities while preserving the original structure.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1750853394/Screenshot_2025-06-25_173933_uutmom.png',
    technologies: ['React', 'Node.js'],
    repoLink: 'https://github.com/tharun199907/ipldashboard',
  },
    {
    id: 'project7',
    title: 'Nxt Assess App',
    description: 'The Nxt Assess App is a responsive, authentication-based assessment platform that demonstrates routing, API integration, state management, and conditional rendering using React. It supports login validation, dynamic question rendering based on type, timer-controlled assessments, and result tracking. This project showcases practical implementation of core React concepts in a complete end-to-end flow.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1750853885/Screenshot_2025-06-25_174720_zil1qv.png',
    technologies: ['React', 'Node.js'],
    liveLink:'https://tharunnareddy.ccbp.tech/',
    repoLink: 'https://github.com/tharun199907/nxtassessapp',
  },
   {
    id: 'project8',
    title: 'Match Game',
    description: 'The Match Game App is a timed image-matching game where users match thumbnails to a target image under a 60-second countdown. It includes score tracking, category-based filtering using tabs, and a dynamic reset functionality upon game over. This project highlights key React concepts like state management, conditional rendering, and event handling in an interactive UI.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1750854586/Screenshot_2025-06-25_175923_gw3dev.png',
    technologies: ['React', 'Node.js'],
    repoLink: 'https://github.com/tharun199907/matchgame',
  },
   {
    id: 'project9',
    title: ' Rock Paper Scissors',
    description: 'The Rock Paper Scissors App is an interactive game where users play against a computer with score tracking and result logic. It features a rules popup, dynamic result view, and random opponent choices. The project demonstrates conditional rendering, state management, and user interaction in a fun React-based UI.',
    imageUrl: 'https://res.cloudinary.com/doitrxzrs/image/upload/v1750910822/Screenshot_2025-06-26_093550_b2wmg1.png',
    technologies: ['React', 'css'],
    repoLink: 'https://github.com/tharun199907/rockpaper',
  },
  
  
];

export const SKILLS_DATA: Skill[] = [
  { id: 'skill1', name: 'JavaScript (ES6+)', icon: <JavaScriptIcon className=" text-info" /> },
  { id: 'skill2', name: 'React', icon: <ReactIcon className="text-info" /> },
  { id: 'skill3', name: 'Node.js', icon: <NodeJSIcon className="text-info" /> },
  { id: 'skill4', name: 'Python', icon: <PythonIcon className=" text-info" /> },
  { id: 'skill5', name: 'CSS', icon: <PaintBrushIcon className=" text-info" /> },
  { id: 'skill6', name: 'HTML', icon: <HTMLIcon className=" text-info" /> },
  { id: 'skill7', name: 'SQL Lite', icon: <DatabaseIcon className=" text-info" /> },
  { id: 'skill8', name: 'MongoDB', icon: <DatabaseIcon className=" text-info" /> },
  { id: 'skill9', name: 'Git & GitHub', icon: <GithubSquareIcon className=" text-info" /> },
  { id: 'skill10', name: 'Responsive Design', icon: <DevicePhoneMobileIcon className="text-info" /> },
  { id: 'skill11', name: 'REST APIs', icon: <RestApiIcon className="text-info" /> },
  { id: 'skill12', name: 'AI Integrations', icon: <AIIcon className="text-info" /> },
  
];
