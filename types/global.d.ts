/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';

export {};

declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module 'meshline' {
  import { Material, BufferGeometry } from 'three';
  
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: THREE.Vector3[] | Float32Array): void;
  }
  
  export class MeshLineMaterial extends Material {
    constructor(parameters?: {
      color?: string | number;
      opacity?: number;
      resolution?: [number, number];
      sizeAttenuation?: boolean;
      lineWidth?: number;
      map?: THREE.Texture;
      useMap?: boolean;
      repeat?: [number, number];
      dashArray?: number;
      dashOffset?: number;
      dashRatio?: number;
      visibility?: number;
      alphaTest?: number;
      depthTest?: boolean;
      transparent?: boolean;
    });
  }
}

// Extend JSX.IntrinsicElements for react-three-fiber custom elements
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
