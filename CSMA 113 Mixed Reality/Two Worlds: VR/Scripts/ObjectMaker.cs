using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectMaker : MonoBehaviour {

  public int amountToMake = 5;
  public GameObject shapeToCopy;

	void Start () {
   
	}

	void Update () {
    if (Input.GetMouseButtonDown(0)) {
      
      for (int i = 0; i < amountToMake; i++) {

        Vector3 randPos = new Vector3(
          Random.Range(-5.0f, 5.0f),
          Random.Range(1.0f, 5.0f),
          Random.Range(-5.0f, 5.0f)
        );

        Instantiate(shapeToCopy, randPos, Quaternion.identity);
      }
    }
	}

}
