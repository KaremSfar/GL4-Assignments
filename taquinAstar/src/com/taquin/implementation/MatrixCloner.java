package com.taquin.implementation;

public class MatrixCloner {

    //Helper Class used to have a deep clone of a given matrix
    static int[][] cloneMatrix(int[][] matrix){
        int[][] myClone = new int[matrix.length][matrix.length];
        for(int i = 0; i < matrix.length ;i++){
            myClone[i] = matrix[i].clone();
        }
        return myClone;
    }
}
