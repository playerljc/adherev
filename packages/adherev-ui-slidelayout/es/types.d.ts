export interface ISlideProps {
    width: string | number;
    height: string | number;
    mask: boolean;
    zIndex: number;
    time: number;
    direction: 'left' | 'right' | 'top' | 'bottom';
    defaultCollapse: boolean;
}
export interface ISlideData {
    $positionConfig: object;
    $maskEl: HTMLElement | null;
    collapse: boolean;
}
