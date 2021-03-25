package com.taquin;

import com.taquin.Astar.AstarAlgorithm;
import com.taquin.Astar.Noeud;
import com.taquin.implementation.EtatTaquin;
import com.taquin.implementation.EtatTaquinSommeDistance;

import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class Main {

    private static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        int[][] matInit;
        int[][] matFinal;

        System.out.println("Donner dimension Taquin");

        int n = sc.nextInt();
        sc.nextLine();

        matInit = new int[n][n];
        matFinal = new int[n][n];

        System.out.println("Donner Mat Initiale");

        for(int i = 0; i < n; i++){
            for(int j = 0; j < n ;j++){
                matInit[i][j] = sc.nextInt();
            }
        }

        sc.nextLine();
        System.out.println("Donner Mat Finale");
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n ;j++){
                matFinal[i][j] = sc.nextInt();
            }
        }

        EtatTaquin etatInitial = new EtatTaquin(matInit);
        EtatTaquin etatFinal = new EtatTaquin(matFinal);

        Noeud noeudInit = new Noeud(etatInitial,etatInitial.getHeuristique(etatFinal),0, etatFinal);
        Noeud noedFinal = new Noeud(etatFinal,0,0,etatFinal);

        AstarAlgorithm astarAlgorithm = new AstarAlgorithm(noeudInit,noedFinal);

        long startTime = new Date().getTime();
        Noeud fina = astarAlgorithm.solve();
        long elapsedTime = (new Date().getTime()) - startTime ;

        while(fina != null){
            ((EtatTaquin)fina.getEtat()).printMatrix();
            System.out.println( " ------------------------- ");
            fina = fina.parent;
        }

        System.out.println("Elapsed time in ms h1 : "+ elapsedTime);

        // HEURISTIQUE SOMME DES DISTANCES
        etatInitial = new EtatTaquinSommeDistance(matInit);
        etatFinal = new EtatTaquinSommeDistance(matFinal);

        noeudInit = new Noeud(etatInitial,etatInitial.getHeuristique(etatFinal),0, etatFinal);
        noedFinal = new Noeud(etatFinal,0,0,etatFinal);

        astarAlgorithm = new AstarAlgorithm(noeudInit,noedFinal);

        startTime = new Date().getTime();
        fina = astarAlgorithm.solve();
        elapsedTime = (new Date().getTime()) - startTime ;

        while(fina != null){
            ((EtatTaquin)fina.getEtat()).printMatrix();
            System.out.println( " ------------------------- ");
            fina = fina.parent;
        }

        System.out.println("Elapsed time in ms h2 : "+ elapsedTime);
    }
}
