package org.plu.dao;

import org.plu.entities.Letovi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LetoviRepository extends JpaRepository<Letovi, Long> {

}
