package com.taquin.Astar;

import java.util.*;

public class AstarAlgorithm {

    public Queue<Noeud> ouverts;
    public List<Noeud> fermes;

    public Noeud noeudInitial;
    public Noeud noeudFinal;

    public AstarAlgorithm(Noeud noeudInitial,Noeud noeudFinal){
        this.noeudInitial = noeudInitial;
        this.noeudFinal = noeudFinal;

        this.ouverts = new PriorityQueue<>((n1, n2) -> {
            if(n1.getEstimation() < n2.getEstimation()) return -1;
            return 1;
        });
        this.fermes = new ArrayList<>();
    }


    public Noeud solve(){

        boolean found = false;

        Noeud fina = null;

        ouverts.add(noeudInitial);

        while(!ouverts.isEmpty() && !found){

            Noeud courant = ouverts.poll();
            fermes.add(courant);

            if(courant.equals(noeudFinal)){
                fina = courant;
                found = true;
            }
            else{

                for (Noeud succ : courant.getSuccessors()) {
                    if(!fermes.contains(succ)){
                        ouverts.add((succ));
                        succ.parent = courant;
                    }else{
                        Noeud aux = fermes.get(fermes.indexOf(succ));
                        if(succ.getEstimation() < aux.getEstimation()){
                            fermes.remove(aux);
                            ouverts.add(aux);
                        }
                    }
                }


            }
        }

        if(found){
            System.out.println("yeeey");
        }


        return fina;
    }

}
