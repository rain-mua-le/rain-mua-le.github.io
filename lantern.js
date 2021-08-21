export class Lantern {
    constructor(scene, material, x, z, speed) {
        let lantern = BABYLON.CreateMesh.CreateCylinder("lantern", {height: 1, diameterTop: 1.5, diameterBottom: 1.5}, scene);
        lantern.material = material;
        let light = new BABYLON.PointLight("light");
    }
}