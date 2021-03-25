package com.taquin.Astar;

import javafx.util.Pair;

import java.util.List;

public interface Etat {

    public List<Pair<Etat,Integer>> getSuccessors();

    public int getHeuristique(Etat etatBut);
}
