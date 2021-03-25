package com.taquin.Astar;

import javafx.util.Pair;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;



// Classe Noeud utilisée dans l'algorithme A*
public class Noeud {

    private Etat etat;
    public Etat etatFinal;
    private int estimation;
    private int coutTotal;
    public Noeud parent;



    public Noeud(Etat etat, int estimation, int coutTotal,Etat etatFinal) {
        this.etat = etat;
        this.estimation = estimation;
        this.coutTotal = coutTotal;
        this.etatFinal = etatFinal;
    }

    public List<Noeud> getSuccessors(){
        List<Noeud> noeudList = new ArrayList<Noeud>();
        for ( Pair<Etat,Integer> etatIntegerPair : etat.getSuccessors()) {

            Etat e = etatIntegerPair.getKey();
            int coutTotal = this.coutTotal + etatIntegerPair.getValue();
            int estimation = coutTotal + e.getHeuristique(this.etatFinal);

            Noeud n = new Noeud(e, estimation, coutTotal,this.etatFinal );
            noeudList.add(n);
        }
        return  noeudList;
    }

    public Etat getEtat() {
        return etat;
    }


    public int getEstimation() {
        return estimation;
    }



    // Deux noeuds sont égaux ssi leurs etat sont egaux
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Noeud noeud = (Noeud) o;
        return etat.equals(noeud.etat);
    }

    @Override
    // Deux noeuds sont égaux ssi leurs etat sont egaux
    public int hashCode() {
        return Objects.hash(etat);
    }



    public void setEtat(Etat etat) {
        this.etat = etat;
    }

    public void setEstimation(int estimation) {
        this.estimation = estimation;
    }

    public int getCoutTotal() {
        return coutTotal;
    }

    public void setCoutTotal(int coutTotal) {
        this.coutTotal = coutTotal;
    }
}
