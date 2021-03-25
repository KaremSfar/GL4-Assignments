package com.taquin.implementation;

import com.taquin.Astar.Etat;
import javafx.util.Pair;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class EtatTaquin implements Etat {

    protected int[][] matrice;


    public EtatTaquin(int[][] matrice){
        this.matrice = matrice;
    }


    @Override
    public List<Pair<Etat, Integer>> getSuccessors() {
        int dimension = matrice.length;
        //get 0 position
        int x=-1,y = -1;
        for(int i=0;i<dimension;i++){
            for(int j =0; j<dimension; j++){
                if(matrice[i][j] == 0){
                    x = i; y = j;
                    break;
                }
            }
            if(x != -1) break;
        }

        //generate Successors
        List<Pair<Etat,Integer>> successors = new ArrayList<>();

        if(x != dimension - 1){
            // go down
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x+1][y];
            matriceNew[x+1][y] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquin(matriceNew);
            successors.add(new Pair<>(e,1));
        }
        if(x != 0){
            // go up
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x - 1][y];
            matriceNew[x - 1][y] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquin(matriceNew);
            successors.add(new Pair<>(e,1));
        }
        if(y != dimension - 1){
            // go right
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x][y+1];
            matriceNew[x][y+1] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquin(matriceNew);
            successors.add(new Pair<>(e,1));
        }
        if(y != 0){
            // go left
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x][y - 1];
            matriceNew[x][y - 1] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquin(matriceNew);
            successors.add(new Pair<>(e,1));
        }

        return successors;

    }

    @Override
    public int getHeuristique(Etat etatTaquinBut) {
        EtatTaquin etatFinal = (EtatTaquin) etatTaquinBut;
        int dimension = this.matrice.length;
        int count = 0;
        for(int i=0;i<dimension;i++){
            for(int j = 0 ; j < dimension ; j++){
                if(matrice[i][j] != etatFinal.getMatrice()[i][j]) count ++;
            }
        }


        return count;
    }




    // Deux Etats sont egaux ssi leurs matrices sont les egales
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EtatTaquin that = (EtatTaquin) o;
        for(int i = 0;i< this.matrice.length;i++){
            if(!Arrays.equals(matrice[i],that.getMatrice()[i])){return  false;}
        }
        return true;
    }
    // Deux Etats sont egaux ssi leurs matrices sont les egales
    @Override
    public int hashCode() {
        int t = 0;
        for(int i =0; i< this.matrice.length;i++) i += Arrays.hashCode(matrice[i]);
        return t;
    }

    public int[][] getMatrice() {
        return matrice;
    }

    public void setMatrice(int[][] matrice) {
        this.matrice = matrice;
    }

    public void printMatrix(){
        for(int i=0; i<matrice.length;i++){
            for(int j = 0; j < matrice.length;j++){
                System.out.print(matrice[i][j]+ "\t");
            }
            System.out.println();
        }
    }


}
