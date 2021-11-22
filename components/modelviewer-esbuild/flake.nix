{

  nixConfig = {
    bash-prompt-suffix = "[dev]# ";
  };

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: 
      let pkgs = nixpkgs.legacyPackages.${system};
  
      in {
        devShell = pkgs.mkShell {
          name = "js-sh";
          buildInputs = with pkgs; [ nodejs-16_x ]; 
          shellHook = ''
            export PATH="/home/plumps/.npm-packages/bin:$PATH"
          '';

          NPM_CONFIG_PREFIX = "/home/plumps/.npm-packages";
        };
      });
}
