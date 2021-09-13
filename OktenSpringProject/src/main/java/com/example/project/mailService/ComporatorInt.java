package com.example.project.mailService;

import com.example.project.models.Product;

import java.util.Comparator;

public class ComporatorInt implements Comparator<Product> {
    @Override
    public int compare(Product o1, Product o2) {
        return Integer.compare(o1.getCost() , o2.getCost());
    }

    public static class ComporatorCostMinus implements Comparator<Product> {
        @Override
        public int compare(Product o1, Product o2) {
            return Integer.compare(o2.getCost(), o1.getCost());
        }
    }

    public static class ComporatorSquarePlus implements Comparator<Product> {
        @Override
        public int compare(Product o1, Product o2) {
            return Integer.compare(o1.getSquare(), o2.getSquare());
        }
    }

    public static class ComporatorSquareMinus implements Comparator<Product> {
        @Override
        public int compare(Product o1, Product o2) {
            return Integer.compare(o2.getSquare(), o1.getSquare());
        }
    }

    public static class ComporatorValuesOfRoomPlus implements Comparator<Product> {
        @Override
        public int compare(Product o1, Product o2) {
            return Integer.compare(o1.getValuesOfRoom(), o2.getValuesOfRoom());
        }
    }

    public static class ComporatorValuesOfRoomMinus implements Comparator<Product> {
        @Override
        public int compare(Product o1, Product o2) {
            return Integer.compare(o2.getValuesOfRoom(), o1.getValuesOfRoom());
        }
    }
}
