{ pkgs ? import <nixpkgs> {}, ... }:

pkgs.mkShell {
  buildInputs = with pkgs;
  [
    solc
    nodejs-18_x
    tilt
  ];
}

